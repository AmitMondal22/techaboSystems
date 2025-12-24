document.addEventListener('DOMContentLoaded', function() {
    // Get solution ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const solutionId = urlParams.get('id');
    
    if (!solutionId) {
        showError('No solution ID provided');
        return;
    }

    // Load the solutions data
    loadSolution(solutionId);
});

async function loadSolution(solutionId) {
    try {
        // In a real implementation, you would fetch this from an API
        // For now, we'll use the solutions array directly
        const solution = getSolutionById(solutionId);
        
        if (!solution) {
            showError('Solution not found');
            return;
        }

        // Render the solution details
        renderSolutionDetails(solution);
    } catch (error) {
        console.error('Error loading solution:', error);
        showError('Failed to load solution details');
    }
}

function renderSolutionDetails(solution) {
    const contentDiv = document.getElementById('solution-content');
    
    // Create the hero section
    const heroSection = `
        <section class="solution-hero" style="background-image: url('${solution.heroImage}');">
            <div class="container">
                <div class="hero-content">
                    <span class="solution-category">${getCategoryName(solution.category)}</span>
                    <h1>${solution.heroTitle || solution.title}</h1>
                    <p class="hero-subtitle">${solution.heroSubtitle || ''}</p>
                </div>
            </div>
        </section>
    `;

    // Create the problem & solution section
    const problemSolutionSection = `
        <section class="problem-solution">
            <div class="container">
                <div class="section-header">
                    <h2>The Problem & Solution</h2>
                    <div class="divider"></div>
                </div>
                <div class="problem-solution-grid">
                    <div class="problem">
                        <h3>The Challenge</h3>
                        <p>${solution.problem}</p>
                    </div>
                    <div class="solution">
                        <h3>Our Solution</h3>
                        <p>${solution.solution}</p>
                    </div>
                </div>
            </div>
        </section>
    `;

    // Create the features section
    const featuresSection = `
        <section class="key-features">
            <div class="container">
                <div class="section-header">
                    <h2>Key Features & Benefits</h2>
                    <div class="divider"></div>
                </div>
                <div class="features-grid">
                    ${solution.features.map(feature => `
                        <div class="feature-card">
                            <div class="feature-icon">
                                <i data-feather="${feature.icon || 'check'}"></i>
                            </div>
                            <h3>${feature.title}</h3>
                            <p>${feature.description}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>
    `;

    // Create the technical specs section
    const techSpecsSection = `
        <section class="technical-data">
            <div class="container">
                <div class="section-header">
                    <h2>Technical Data Points</h2>
                    <div class="divider"></div>
                </div>
                <div class="specs-grid">
                    ${Object.entries(solution.technicalSpecs).map(([key, value]) => `
                        <div class="spec-item">
                            <span class="spec-key">${key}:</span>
                            <span class="spec-value">${value}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>
    `;

    // Create the use cases section
    const useCasesSection = `
        <section class="use-cases">
            <div class="container">
                <div class="section-header">
                    <h2>Ideal Use Cases</h2>
                    <div class="divider"></div>
                </div>
                <div class="use-cases-grid">
                    ${solution.useCases.map(useCase => `
                        <div class="use-case">
                            <i data-feather="check-circle"></i>
                            <span>${useCase}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>
    `;

    // Create the related products section if there are any
    let relatedProductsSection = '';
    if (solution.relatedProducts && solution.relatedProducts.length > 0) {
        relatedProductsSection = `
            <section class="related-products">
                <div class="container">
                    <div class="section-header">
                        <h2>Related Products</h2>
                        <div class="divider"></div>
                    </div>
                    <div class="products-grid">
                        <!-- This would be populated with related product cards -->
                        <p>Related products would be displayed here based on the solution requirements.</p>
                    </div>
                </div>
            </section>
        `;
    }

    // Combine all sections
    contentDiv.innerHTML = `
        ${heroSection}
        ${problemSolutionSection}
        ${featuresSection}
        ${techSpecsSection}
        ${useCasesSection}
        ${relatedProductsSection}
    `;

    // Initialize Feather icons
    if (window.feather) {
        feather.replace();
    }
}

function getCategoryName(category) {
    const categories = {
        'energy': 'Energy Management',
        'monitoring': 'Monitoring',
        'safety': 'Safety & Security',
        'infrastructure': 'Infrastructure'
    };
    return categories[category] || 'Solution';
}

function showError(message) {
    const contentDiv = document.getElementById('solution-content');
    contentDiv.innerHTML = `
        <div class="error-message">
            <i data-feather="alert-triangle"></i>
            <h2>${message}</h2>
            <p>Please check the URL and try again, or <a href="solutions.html">browse our solutions</a>.</p>
        </div>
    `;
    
    if (window.feather) {
        feather.replace();
    }
}
