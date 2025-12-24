@extends('layouts.app')

@section('title', $title)
@section('header_content')
    <link rel="stylesheet" href="{{ asset('public/client/navbar.css') }}">
    <link rel="stylesheet" href="{{ asset('public/client/products.css') }}">
@endsection

@section('content')

    <div class="container">
        <!-- Sidebar Filters -->
        <aside class="sidebar">
            <div class="filter-section">
                <h3 class="filter-title">
                    <svg class="filter-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                        <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                        <line x1="12" y1="22.08" x2="12" y2="12"></line>
                    </svg>
                    Communication
                </h3>
                <label class="filter-checkbox">
                    <input type="checkbox" data-filter="communication" value="lora">
                    <span>LoRa</span>
                </label>
                <label class="filter-checkbox">
                    <input type="checkbox" data-filter="communication" value="lorawan">
                    <span>LoRaWAN</span>
                </label>
                <label class="filter-checkbox">
                    <input type="checkbox" data-filter="communication" value="4g">
                    <span>4G / LTE</span>
                </label>
                <label class="filter-checkbox">
                    <input type="checkbox" data-filter="communication" value="wifi">
                    <span>WiFi</span>
                </label>
                <label class="filter-checkbox">
                    <input type="checkbox" data-filter="communication" value="ethernet">
                    <span>Ethernet</span>
                </label>
                <label class="filter-checkbox">
                    <input type="checkbox" data-filter="communication" value="rs485">
                    <span>RS485 / RS232</span>
                </label>
                <label class="filter-checkbox">
                    <input type="checkbox" data-filter="communication" value="mqtt">
                    <span>MQTT / HTTP</span>
                </label>
                <label class="filter-checkbox">
                    <input type="checkbox" data-filter="communication" value="modbus">
                    <span>Modbus RTU / TCP</span>
                </label>
            </div>

            <div class="filter-section">
                <h3 class="filter-title">
                    <svg class="filter-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="1" y="3" width="15" height="13"></rect>
                        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                        <circle cx="5.5" cy="18.5" r="2.5"></circle>
                        <circle cx="18.5" cy="18.5" r="2.5"></circle>
                    </svg>
                    Power Source
                </h3>
                <label class="filter-checkbox">
                    <input type="checkbox" data-filter="power" value="battery">
                    <span>Battery Operated</span>
                </label>
                <label class="filter-checkbox">
                    <input type="checkbox" data-filter="power" value="solar">
                    <span>Solar Powered</span>
                </label>
                <label class="filter-checkbox">
                    <input type="checkbox" data-filter="power" value="ac-dc">
                    <span>AC/DC Powered</span>
                </label>
            </div>

            <div class="filter-section">
                <h3 class="filter-title">
                    <svg class="filter-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="3"></circle>
                        <path d="M12 1v6m0 6v6m5.2-14.2l-4.2 4.2m0 6l-4.2 4.2M23 12h-6m-6 0H5m14.2 5.2l-4.2-4.2m0-6L10.8 1.8"></path>
                    </svg>
                    Input/Output Type
                </h3>
                <label class="filter-checkbox">
                    <input type="checkbox" data-filter="io" value="analog">
                    <span>Analog Input (AI)</span>
                </label>
                <label class="filter-checkbox">
                    <input type="checkbox" data-filter="io" value="digital-in">
                    <span>Digital Input (DI)</span>
                </label>
                <label class="filter-checkbox">
                    <input type="checkbox" data-filter="io" value="digital-out">
                    <span>Digital Output (DO)</span>
                </label>
                <label class="filter-checkbox">
                    <input type="checkbox" data-filter="io" value="pulse">
                    <span>Pulse Counter</span>
                </label>
                <label class="filter-checkbox">
                    <input type="checkbox" data-filter="io" value="rtd">
                    <span>RTD / Temp</span>
                </label>
            </div>

            <div class="filter-section">
                <h3 class="filter-title">
                    <svg class="filter-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                        <line x1="7" y1="7" x2="7.01" y2="7"></line>
                    </svg>
                    Application
                </h3>
                <label class="filter-checkbox">
                    <input type="checkbox" data-filter="application" value="energy">
                    <span>Energy Monitoring</span>
                </label>
                <label class="filter-checkbox">
                    <input type="checkbox" data-filter="application" value="water">
                    <span>Water Management</span>
                </label>
                <label class="filter-checkbox">
                    <input type="checkbox" data-filter="application" value="industrial">
                    <span>Industrial Automation</span>
                </label>
                <label class="filter-checkbox">
                    <input type="checkbox" data-filter="application" value="environmental">
                    <span>Environmental Monitoring</span>
                </label>
                <label class="filter-checkbox">
                    <input type="checkbox" data-filter="application" value="smart-city">
                    <span>Smart City</span>
                </label>
                <label class="filter-checkbox">
                    <input type="checkbox" data-filter="application" value="transformer">
                    <span>Transformer Monitoring</span>
                </label>
                <label class="filter-checkbox">
                    <input type="checkbox" data-filter="application" value="irrigation">
                    <span>Irrigation Control</span>
                </label>
            </div>

            <button class="clear-filters">Clear All Filters</button>
        </aside>

        <!-- Products Grid -->
        <main class="main-content">
            <div class="products-header">
                <h1 class="products-title">All Products</h1>
                <p class="products-count"><span id="product-count">42</span> products found</p>
            </div>

            <div class="products-grid" id="products-grid">
                <!-- Products will be dynamically inserted here -->
            </div>
        </main>
    </div>

@endsection
@section('footer_content')
    <script src="{{ asset('public/client/script.js') }}"></script>
    <script src="{{ asset('public/client/js/products.js') }}"></script>
@endsection
