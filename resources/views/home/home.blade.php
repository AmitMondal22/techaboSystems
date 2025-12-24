@extends('layouts.app')

@section('title', $title)

@section('content')

    <main id="main-content">
        <!-- Hero Section -->
        <section class="hero" id="home" aria-labelledby="main-heading">

            <div class="hero-overlay"></div>
            <div class="hero-content container">
                <header>
                    <h1 id="main-heading">Transform Your Business <br> with <span class="highlight">Smart IoT</span> Solutions
                    </h1>
                    <p class="hero-description">Unlock the power of connected devices and intelligent <br> insights to drive
                        efficiency, security, and innovation.</p>

                </header>

                <div class="hero-buttons">
                    <a href="#demo" class="btn-primary" aria-label="Schedule a demo of our IoT solutions">Schedule
                        Demo</a>
                    <a href="#case-studies" class="btn-secondary" id="view-case-studies"
                        aria-label="View our case studies">View Case Studies</a>
                </div>
            </div>
            <div class="hero-background">
                <img src="{{ asset('client/assets/ChatGPT Image Nov 19, 2025, 09_34_18 PM.png') }}" alt="Background" class="hero-bg-image">
            </div>
        </section>

        <!-- Industry Leaders -->
        <section class="industry-leaders" aria-labelledby="industry-leaders-heading">
            <div class="container">
                <div class="stats" role="region" aria-label="Company statistics">
                    <div class="stat-item">
                        <h3><span class="counter" data-target="75">0</span> +</h3>
                        <p>Finished Projects</p>
                    </div>
                    <div class="stat-item">
                        <h3><span class="counter" data-target="25">0</span> +</h3>
                        <p>Products</p>
                    </div>
                    <div class="stat-item">
                        <h3><span class="counter" data-target="11950">0</span> +</h3>
                        <p>Sensor Deployed</p>
                    </div>
                    <div class="stat-item">
                        <h3><span class="counter" data-target="50">0</span> +</h3>
                        <p>Happy Clients</p>
                    </div>
                </div>
                <header class="section-header">
                    <h2 id="industry-leaders-heading">Trusted by Industry Leaders</h2>
                    <p class="highlight">Our track record speaks for itself. We've helped hundreds of companies transform
                        their operations with smart IoT solutions.</p>
                </header>

            </div>
        </section>
        <!-- News Flash Bar -->
        <div class="news-flash-container">
            <div class="news-flash-content">
                <!-- Original Items -->
                <div class="news-flash-item"><img src="{{ asset('client/assets/Media/1-1.png') }}" alt="Techavo Solutions Logo"></div>
                <div class="news-flash-item"><img src="{{ asset('client/assets/Media/2-1.png') }}" alt="Techavo Solutions Logo"></div>
                <div class="news-flash-item"><img src="{{ asset('client/assets/Media/3-1.png') }}" alt="Techavo Solutions Logo"></div>
                <div class="news-flash-item"><img src="{{ asset('client/assets/Media/4-1.png') }}" alt="Techavo Solutions Logo"></div>
                <div class="news-flash-item"><img src="{{ asset('client/assets/Media/5-1.png') }}" alt="Techavo Solutions Logo"></div>
                <div class="news-flash-item"><img src="{{ asset('client/assets/Media/7-1.png') }}" alt="Techavo Solutions Logo"></div>
                <div class="news-flash-item"><img src="{{ asset('client/assets/Media/8-1.png') }}" alt="Techavo Solutions Logo"></div>
                <div class="news-flash-item"><img src="{{ asset('client/assets/Media/9-1.png') }}" alt="Techavo Solutions Logo"></div>
                <!-- Duplicated Items for Seamless Loop -->
                {{-- <div class="news-flash-item"><img src="{{ asset('client/assets/Media/1-1.png') }}" alt="Techavo Solutions Logo"></div>
                <div class="news-flash-item"><img src="{{ asset('client/assets/Media/2-1.png') }}" alt="Techavo Solutions Logo"></div>
                <div class="news-flash-item"><img src="{{ asset('client/assets/Media/3-1.png') }}" alt="Techavo Solutions Logo"></div>
                <div class="news-flash-item"><img src="{{ asset('client/assets/Media/4-1.png') }}" alt="Techavo Solutions Logo"></div>
                <div class="news-flash-item"><img src="{{ asset('client/assets/Media/5-1.png') }}" alt="Techavo Solutions Logo"></div>
                <div class="news-flash-item"><img src="{{ asset('client/assets/Media/7-1.png') }}" alt="Techavo Solutions Logo"></div>
                <div class="news-flash-item"><img src="{{ asset('client/assets/Media/8-1.png') }}" alt="Techavo Solutions Logo"></div>
                <div class="news-flash-item"><img src="{{ asset('client/assets/Media/9-1.png') }}" alt="Techavo Solutions Logo"></div> --}}
            </div>
        </div>



        <section class="products" id="products-section" aria-labelledby="products-heading">
            <div class="overlay">
                <h1 class="section-header">Powering the future of Industrial Automation</h1>
                <p class="section-intro">Modular IOT devices for remote monitoring data logging, control and communication -
                    all designed for harsh conditions and mission-critical environments.</p>
            </div>
            <div class="view-all-container"
                style="margin: 2rem 0; position: relative; z-index: 1; display: flex; justify-content: center; gap: 1rem; width: 100%;">
                <a href="products.html" class="btn-nav btn-primary"
                    style="display: inline-block; background-color: #007BFF !important; color: white !important; padding: 0.8rem 2.5rem; border-radius: 30px; font-weight: 600; font-family: 'Quicksand', sans-serif; font-size: 1rem; text-decoration: none; border: none; cursor: pointer; text-transform: uppercase; margin-left: -43rem; letter-spacing: 0.5px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);">View
                    Products</a>
                <a href="#" class="btn-nav btn-secondary"
                    style="display: inline-block; background-color: #6c757d !important; color: white !important; padding: 0.8rem 2rem; border-radius: 30px; font-weight: 600; font-family: 'Quicksand', sans-serif; font-size: 1rem; text-decoration: none; border: none; cursor: pointer; text-transform: uppercase; letter-spacing: 0.5px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);">Download
                    Brochure</a>
            </div>
            <div class="svg-container">
                <img class="svg" src="{{ asset('client/assets/Media/Untitled_design__7_-removebg-preview.png') }}" alt="">
            </div>
            <h2 id="products-heading" class="products-header">Our Products curated for your every IoT needs</h2>


        </section>
        <div class="products-cards-container">
            <!-- First Row -->
            <div class="products-card">

                <img class="RTU-img" src="{{ asset('client/assets/Media/server.png') }}" alt="RTU">
                <div>
                    <h3>Remote Terminal Units (RTUs)</h3>
                    <p>Rugged remote monitoring solutions</p>
                </div>
            </div>
            <div class="products-card">
                <img class="data-logger-img" src="{{ asset('client/assets/Media/activity-log.png') }}" alt="Data Logger">
                <div>
                    <h3>Data Loggers</h3>
                    <p>Precision data collection devices</p>
                </div>
            </div>
            <div class="products-card">
                <img class="wifi-img" src="{{ asset('client/assets/Media/wifi.png') }}" alt="IoT Device">
                <div>
                    <h3>Gateways</h3>
                    <p>Seamless IoT connectivity</p>
                </div>
            </div>
            <div class="products-card">
                <img class="smart-setting-img" src="{{ asset('client/assets/Media/technology.png') }}" alt="Smart Controller">
                <div>
                    <h3>Smart Controller Units</h3>
                    <p>Advanced automation control</p>
                </div>
            </div>
            <!-- Second Row -->
            <div class="products-card">
                <img src="{{ asset('client/assets/internet-of-things.png') }}" alt="Controller">
                <div>
                    <h3>Controllers</h3>
                    <p>Advanced control systems</p>
                </div>
            </div>
            <div class="products-card">
                <img src="{{ asset('client/assets/microchip.png') }}" alt="IoDevice">
                <div>
                    <h3>IO Device</h3>
                    <p>Network connectivity solutions</p>
                </div>
            </div>
            <div class="products-card">
                <img src="{{ asset('client/assets/sensor.png') }}" alt="Sensor Node">
                <div>
                    <h3>Sensor Nodes</h3>
                    <p>Distributed sensing solutions</p>
                </div>
            </div>
            <div class="products-card">
                <img src="{{ asset('client/assets/uninterrupted-power-supply.png') }}" alt="Power and Accessories">
                <div>
                    <h3>Power & Accessories</h3>
                    <p>Power solutions and add-ons</p>
                </div>
            </div>
        </div>


        </div>
        </section>
        </div>




        <!-- IoT Solutions in Action -->
        <section class="solutions" id="solutions" aria-labelledby="solutions-heading">
            <div class="container">
                <header class="section-header">
                    <h2 id="solutions-heading">IoT Solutions in Action</h2>
                    <p class="section-intro">See how our innovative IoT solutions are transforming businesses across
                        industries.</p>
                </header>
                <div class="solution-gallery">
                    <article class="solution-card">
                        <div class="solution-image">
                            <img src="{{ asset('client/assets/Media/process-automation.jpg') }}" width="400" height="250"
                                alt="Industrial IoT monitoring system in action" loading="lazy">
                        </div>
                        <div class="solution-content">
                            <h3>Process Automation</h3>
                            <p>Streamline your operations with our advanced process automation solutions that integrate
                                seamlessly with existing systems, increasing efficiency by up to 45% while reducing manual
                                intervention.</p>
                            <a href="solutions.html" class="solution-link">Learn more <span
                                    aria-hidden="true">→</span></a>
                        </div>
                    </article>

                    <article class="solution-card">
                        <div class="solution-image">
                            <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                                width="400" height="250" alt="Smart city IoT implementation" loading="lazy">
                        </div>
                        <div class="solution-content">
                            <h3>Smart Infrastructure Solutions</h3>
                            <p>Transform urban spaces with our smart infrastructure solutions that leverage IoT for
                                intelligent traffic systems, energy-efficient lighting, and real-time environmental
                                monitoring.</p>
                            <a href="solutions.html" class="solution-link">Learn more <span
                                    aria-hidden="true">→</span></a>
                        </div>
                    </article>

                    <article class="solution-card">
                        <div class="solution-image">
                            <img src="{{ asset('client/assets/Media/utility-management.avif') }}" width="400" height="250"
                                alt="Connected healthcare devices" loading="lazy">
                        </div>
                        <div class="solution-content">
                            <h3>Utility Management Solutions</h3>
                            <p>Optimize resource allocation and reduce operational costs with our comprehensive utility
                                management systems that monitor and control water, electricity, and gas consumption in
                                real-time.</p>
                            <a href="solutions.html" class="solution-link">Learn more <span
                                    aria-hidden="true">→</span></a>
                        </div>
                    </article>
                </div>
            </div>
        </section>


        <!--Products Display-->
        <!-- CTA -->
        <section class="cta" id="contact" aria-labelledby="cta-heading">
            <div class="container">
                <header class="cta-header">
                    <h2 id="cta-heading">Turn Data Into Decisions, <span class="highlight">Ideas Into Reality</span></h2>
                    <p>Ready to revolutionize your business with IoT? Schedule a demo today and see our solutions in action.
                    </p>
                    <a href="#" class="btn-primary"
                        style="background: #0d6efd; margin-top: 1rem; padding: 1rem 2rem; border-radius: 6px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; display: inline-flex; align-items: center; gap: 0.5rem;">Schedule
                        a Demo <span style="display: inline-block; transition: transform 0.3s ease;">→</span></a>
            </div>
        </section>
    </main>

@endsection
