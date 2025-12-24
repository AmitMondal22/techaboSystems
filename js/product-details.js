document.addEventListener('DOMContentLoaded', function() {
    // Get product ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id')) || 1; // Default to first product if no ID specified

    // Find the product in the products array
    const product = products.find(p => p.id === productId);
    
    if (product) {
        renderProductPage(product);
    } else {
        console.error('Product not found');
        // Redirect to products page or show error
        window.location.href = 'products.html';
    }

    // Tab navigation functionality
    const tabs = document.querySelectorAll('.tab');
    
    function setActiveTab(tabId) {
        // Remove active class from all tabs and sections
        tabs.forEach(tab => tab.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(section => {
            section.classList.remove('active');
        });

        // Add active class to selected tab and corresponding section
        const activeTab = document.querySelector(`.tab[data-tab="${tabId}"]`);
        const activeSection = document.getElementById(tabId);
        
        if (activeTab) activeTab.classList.add('active');
        if (activeSection) activeSection.classList.add('active');

        // Update URL hash
        window.location.hash = tabId;
    }

    // Add click event listeners to tabs
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabId = tab.getAttribute('data-tab');
            setActiveTab(tabId);
        });
    });

    // Check URL hash on page load
    function checkHash() {
        const hash = window.location.hash.substring(1);
        if (hash) {
            setActiveTab(hash);
        } else {
            setActiveTab('overview');
        }
    }

    // Handle back/forward navigation
    window.addEventListener('popstate', checkHash);
    
    // Initial check
    checkHash();
});

// Function to render product page with data
function renderProductPage(product) {
    // Update hero section
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        // Set up the background with the image
        if (product.heroBgImage) {
            // Set only the background image
            heroSection.style.background = `url('${product.heroBgImage}') no-repeat center center/cover`;
            heroSection.style.backgroundBlendMode = 'normal';
        } else if (product.heroBg) {
            // Fallback to just the background color/gradient if no image
            heroSection.style.background = product.heroBg;
        }
        
        // Ensure text is readable
        heroSection.style.color = '#ffffff';
        heroSection.style.textShadow = '0 1px 3px rgba(0, 0, 0, 0.5)';
        
        // Add smooth transition for background changes
        heroSection.style.transition = 'background 0.5s ease-in-out';
    }
    
    document.querySelector('.hero-category').textContent = product.category.toUpperCase();
    document.querySelector('.hero-title').textContent = product.name;
    document.querySelector('.hero-description').textContent = product.description;
    
    // Add tags to hero section
    const heroFeatures = document.querySelector('.hero-features');
    if (heroFeatures) {
        const tags = [];
        
        // Add communication tags (max 2)
        const commTags = (product.communication || []).filter(Boolean);
        if (commTags.length > 0) {
            tags.push(...commTags.slice(0, 2).map(tag => 
                `<span class="product-tag tag-communication">${tag.replace(/-/g, ' ').toUpperCase()}</span>`
            ));
        }
        
        // Add feature tags (DIN-rail)
        const designFeatures = product.features?.design || [];
        if (designFeatures.some(d => d && d.includes('DIN-rail'))) {
            tags.push('<span class="product-tag tag-feature">DIN-RAIL</span>');
        }
        
        // Add application tags (max 1)
        const appTags = (product.application || []).filter(Boolean).slice(0, 1);
        if (appTags.length > 0) {
            tags.push(`<span class="product-tag tag-application">${appTags[0].replace(/-/g, ' ').toUpperCase()}</span>`);
        }
        
        // Add tags to the hero section
        heroFeatures.innerHTML = tags.length > 0 ? tags.join('') : '';
    }
    
    const heroImage = document.querySelector('.hero-image');
    if (heroImage && product.image) {
        heroImage.src = product.image;
        heroImage.alt = product.name;
        heroImage.style.display = 'block';
    }

    // Update features from product.features object
    const featuresContainer = document.querySelector('.features-grid');
    if (featuresContainer && product.features) {
        featuresContainer.innerHTML = Object.entries(product.features).map(([key, value], index) => {
            // Handle different types of feature values (string, array, object)
            let featureContent = '';
            if (Array.isArray(value)) {
                featureContent = `<ul>${value.map(item => `<li>${item}</li>`).join('')}</ul>`;
            } else if (typeof value === 'object' && value !== null) {
                featureContent = Object.entries(value).map(([k, v]) => 
                    `<p><strong>${k}:</strong> ${v}</p>`
                ).join('');
            } else {
                featureContent = value;
            }

            return `
                <div class="feature-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <div class="feature-icon">
                                <span>${index + 1}</span>
                            </div>
                            <div class="feature-title">${key.replace(/([A-Z])/g, ' $1').trim()}</div>
                            <div class="feature-description">
                                ${Array.isArray(value) ? value[0] : (typeof value === 'string' ? value : '')}
                            </div>
                        </div>
                        <div class="flip-card-back">
                            <div class="feature-back-content">
                                <h3>${key.replace(/([A-Z])/g, ' $1').trim()}</h3>
                                ${featureContent}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }

    // Update specifications from technicalSpecs
    const specsContainer = document.querySelector('.specs-container');
    if (specsContainer && product.technicalSpecs && Array.isArray(product.technicalSpecs)) {
        specsContainer.innerHTML = '';
        
        // Create a single column for all specs
        product.technicalSpecs.forEach((specGroup, index) => {
            if (!specGroup || !specGroup.rows) return;
            
            const specItem = document.createElement('div');
            specItem.className = 'spec-item';
            
            // Create the header with the spec group title and number
            const header = document.createElement('div');
            header.className = 'spec-header';
            const specNumber = index + 1;
            header.innerHTML = `
                <span class="spec-label">
                    
                    ${specGroup.title || 'Specification'}
                </span>
                <span class="spec-icon">→</span>
            `;
            
            // Create the content with all rows
            const content = document.createElement('div');
            content.className = 'spec-content';
            
            const table = document.createElement('table');
            const thead = document.createElement('thead');
            const tbody = document.createElement('tbody');
            
            // Add table header
            thead.innerHTML = `
                <tr>
                    
                </tr>
            `;
            
            // Add table rows
            specGroup.rows.forEach(row => {
                if (!row || !row.label || !row.value) return;
                
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td class="spec-label">${row.label}</td>
                    <td class="spec-value">${row.value.replace(/<br>/g, '<br>')}</td>
                `;
                tbody.appendChild(tr);
            });
            
            table.appendChild(thead);
            
            table.appendChild(tbody);
            content.appendChild(table);
            
            specItem.appendChild(header);
            specItem.appendChild(content);
            specsContainer.appendChild(specItem);
        });
    }

    // Initialize accordion after a small delay to ensure DOM is ready
    setTimeout(initSpecsAccordion, 100);

    // Update page title and meta description
    document.title = `${product.name} | Techavo Solutions`;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.content = product.description;
    }

    // Update Open Graph meta tags for social sharing
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const ogImage = document.querySelector('meta[property="og:image"]');
    
    if (ogTitle) ogTitle.content = `${product.name} | Techavo Solutions`;
    if (ogDescription) ogDescription.content = product.description;
    if (ogImage && product.image) ogImage.content = new URL(product.image, window.location.origin).href;

    // Update Twitter card meta tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    const twitterImage = document.querySelector('meta[name="twitter:image"]');
    
    if (twitterTitle) twitterTitle.content = `${product.name} | Techavo Solutions`;
    if (twitterDescription) twitterDescription.content = product.description;
    if (twitterImage && product.image) twitterImage.content = new URL(product.image, window.location.origin).href;

    // Update canonical URL
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
        const url = new URL(window.location.href);
        url.searchParams.set('id', product.id);
        canonicalLink.href = url.toString();
    }
}
