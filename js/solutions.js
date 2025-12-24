// Solutions Database
const solutions = [
    {
        id: 'energy-management',
        title: 'Energy Management & Power Quality',
        category: 'energy',
        heroImage: 'assets/generated-image (2).png',
        heroTitle: 'Optimize Your Energy Consumption',
        heroSubtitle: 'Real-time monitoring and analytics for better energy efficiency',
        architectureDiagram: 'assets/generated-image (2).png',
        problem: 'You can\'t manage what you can\'t measure. Invisible energy peaks, poor power factor, and voltage fluctuations drive up operational costs and damage expensive machinery.',
        solution: 'Our gateway connects to your existing energy meters to provide a granular view of your electrical infrastructure, helping you achieve ISO 50001 compliance.',
        features: [
            { title: 'Real-time Monitoring', description: 'Track energy consumption across multiple points in real-time', icon: 'monitor' },
            { title: 'Power Quality Analysis', description: 'Identify and address power quality issues before they cause damage', icon: 'activity' },
            { title: 'Cost Allocation', description: 'Accurately allocate energy costs to departments or processes', icon: 'dollar-sign' },
            { title: 'Automated Reports', description: 'Generate compliance and performance reports automatically', icon: 'file-text' }
        ],
        technicalSpecs: {
            'Voltage Measurements': 'V_LN, V_LL, average voltage (per phase) — sampled per configurable interval',
            'Current Measurements': 'I_1, I_2, I_3, Neutral Current, average current (A)',
            'Power Metrics': 'Active (kW), Reactive (kVAR), Apparent (kVA), Demand (kW peak)',
            'Consumption': 'Total active energy (kWh), interval energy (kWh) for cost allocation',
            'Power Quality': 'Power Factor (PF), Frequency (Hz), THD for Voltage & Current'
        },
        useCases: ['Manufacturing plants','Commercial buildings','Data centers','Retail chains','Healthcare facilities'],
        relatedProducts: [1, 2, 3],
        architecture: [
  {
    title: 'Energy Meters',
    description: 'Collect high‑resolution electrical parameters from feeders, panels, and critical loads.'
  },
  {
    title: 'Techavo Gateway',
    description: 'Normalizes protocols, performs edge filtering, and publishes secure streams to the cloud.'
  },
  {
    title: 'Cloud Analytics',
    description: 'Aggregates data from all sites, runs analytics, and powers dashboards and alerts.'
  },
  {
    title: 'SCADA & Applications',
    description: 'Operators and existing systems consume insights via dashboards, APIs, or SCADA links.'
  }
],


    },
    {
        id: 'dg-monitoring',
        title: 'DG Set Monitoring & Fuel Security',
        category: 'monitoring',
        heroImage: 'assets/dg-monitoring.png',
        heroTitle: 'Guaranteed Reliability for Your Backup Power',
        heroSubtitle: 'Real-time monitoring and fuel security for your DG fleet',
        architectureDiagram: '',
        problem: 'Diesel generator failures during power outages can lead to costly downtime, while fuel theft and inefficient usage drive up operational costs.',
        solution: 'Our comprehensive DG monitoring solution provides real-time visibility into your backup power infrastructure, preventing failures and optimizing fuel usage.',
        features: [
            { title: 'Fuel Level Monitoring', description: 'Precise fuel level tracking with anti-theft alerts', icon: 'droplet' },
            { title: 'Performance Analytics', description: 'Track run hours, load levels, and maintenance needs', icon: 'bar-chart-2' },
            { title: 'Condition-Based Maintenance', description: 'Get alerts before critical failures occur based on actual run-hours and sensor data', icon: 'alert-triangle' },
            { title: 'Remote Control', description: 'Start/stop and monitor DG sets remotely', icon: 'power' }
        ],
        technicalSpecs: {
            'Fuel Management': 'Fuel level (L / %), calibrated tank curve, consumption rate (L/hr)',
            'Engine Parameters': 'RPM, Oil Pressure (bar), Coolant Temp (°C), Oil Temp (°C)',
            'Runtime & Status': 'Accumulated run-hours, start/stop events, autostart cycles',
            'Electrical Output': 'Generator Voltage (V), Load Current (A), Power Output (kW)',
            'Controller Diagnostics': 'Fault codes (controller), last error timestamp'
        },
        useCases: ['Telecom towers','Hospitals','Data centers','Manufacturing facilities','Commercial buildings'],
        relatedProducts: [4, 5, 6]
    },
    {
        id: 'flow-meter',
        title: 'Precision Flow Meter Monitoring',
        category: 'monitoring',
        heroImage: 'assets/Media/solutions/flow-meter.jpg',
        heroTitle: 'Precision Flow Meter Monitoring for Real-time Consumption and Leak Detection.',
        heroSubtitle: 'Gain granular visibility into your water, gas, or process fluid usage. Our IoT Gateway digitizes any flow meter for instant leak alerts, accurate billing, and waste reduction.',
        architectureDiagram: '',
        problem: 'Undetected leaks can waste thousands of liters and inflate utility bills. Manual flow logging is error-prone and fails to provide the real-time data needed for preventative action.',
        solution: 'Our system converts the output of existing flow meters into reliable, cloud-based data. Monitor consumption trends, set thresholds for usage spikes, and get instant notifications for potential pipeline bursts or unauthorized usage.',
        features: [
            { title: 'Instant Leak Detection', description: 'Receive alerts for unusual flow rates or continuous flow during non-operational hours', icon: 'alert-triangle' },
            { title: 'Accurate Sub-Metering', description: 'Precise consumption tracking for zones or tenants to simplify billing', icon: 'dollar-sign' },
            { title: 'Pressure Compensation', description: 'Integrate pressure and temperature sensors to calculate true volume', icon: 'sliders' },
            { title: 'Data Visualization', description: 'Compare consumption across shifts, days, and months with clear charts', icon: 'bar-chart-2' }
        ],
        technicalSpecs: {
            'Volume Tracking': 'Totalized volume (m³, L, gal) with timestamped pulses',
            'Instantaneous Rate': 'Flow rate (m³/min, L/min), rolling average windows',
            'Line Health': 'Line pressure (Bar/PSI), sensor temperature for compensation',
            'Meter Interfaces': 'Pulse, 4-20mA, Modbus registers supported',
            'Tamper & Errors': 'Meter status codes, lost-pulse detection'
        },
        useCases: ['Municipal Water Distribution','Process Industries','Commercial Real Estate'],
        relatedProducts: [7, 8, 9]
    },
    {
        id: 'transformer',
        title: 'Transformer Monitoring',
        category: 'energy',
        heroImage: 'assets/Media/solutions/transformer.jpg',
        heroTitle: 'Prevent Catastrophic Failure: Transformer Monitoring.',
        heroSubtitle: 'Maximize the lifespan of your highest-value assets with continuous, real-time health data to manage thermal stress, prevent overloading, and preemptively detect issues.',
        architectureDiagram: '',
        problem: 'Transformers are expensive, critical assets susceptible to thermal degradation and sudden failure due to sustained overloads. Reliance on quarterly manual checks is insufficient.',
        solution: 'Our system captures key diagnostic parameters—like winding temperature, oil temperature, and load current—in real-time allowing condition-based maintenance and early warning before outages.',
        features: [
            { title: 'Thermal Stress Management', description: 'Monitor WTI and OTI values to prevent insulation breakdown', icon: 'thermometer' },
            { title: 'Load Profile Analysis', description: 'Analyze load cycles to keep the transformer within safe capacity', icon: 'activity' },
            { title: 'Component Health Tracking', description: 'Early warnings for low oil levels, vibration, or relay activation', icon: 'info' },
            { title: 'Automated Data Logging', description: 'Maintain precise, time-stamped logs for reporting and insurance', icon: 'file-text' }
        ],
        technicalSpecs: {
            'Thermal Health': 'Winding temp (°C), Oil temp (°C), ambient temp (°C)',
            'Oil & Mechanical': 'Oil level (%), Buchholz relay status (Alarm/Trip), PRD status',
            'Load Metrics': 'Load current (A), kVA loading percentage, tap changer position',
            'Vibration Monitoring': 'RMS vibration (g) and frequency spectrum snapshot',
            'Event Logging': 'Protection trips, cooling fan cycles, maintenance flags'
        },
        useCases: ['Grid Substations','Data Centers','Heavy Manufacturing'],
        relatedProducts: [10, 11, 12]
    },
    {
        id: 'temp-humidity',
        title: 'Ambient Temperature & Humidity Monitoring',
        category: 'monitoring',
                heroImage: 'assets/Media/solutions/temp-humidity.jpg',
        heroTitle: 'Precise Environmental Control for Asset Safety and HVAC Efficiency.',
        heroSubtitle: 'Protect sensitive electronics, maintain air quality, and verify HVAC performance with continuous, highly accurate temperature and humidity mapping across your facility.',
        architectureDiagram: '',
        problem: 'Inconsistent environmental control leads to unnecessary energy waste and risks like thermal hotspots and high humidity that can cause hardware failure or material damage.',
        solution: 'Our IoT Gateway utilizes distributed sensors to create a comprehensive thermal map, pinpoint temperature variances, detect condensation risk, and enable immediate HVAC adjustments.',
        features: [
            { title: 'Asset Protection', description: 'Monitor server racks and archives to keep conditions within safe operating limits', icon: 'shield' },
            { title: 'Hotspot Detection', description: 'Identify localized temperature increases and receive instant alerts', icon: 'alert-circle' },
            { title: 'Condensation Prevention', description: 'Calculate Dew Point and alert to conditions that may cause condensation', icon: 'droplet' },
            { title: 'HVAC Verification', description: 'Validate AC performance and thermal uniformity across zones', icon: 'check-circle' }
        ],
        technicalSpecs: {
            'Temperature Accuracy': '±0.2°C high-accuracy probes (logging interval configurable)',
            'Humidity Range': 'Relative Humidity 0–100% RH, resolution 0.1% RH',
            'Calculated Metrics': 'Dew Point and Wet Bulb for condensation risk',
            'Zone Mapping': 'Multi-sensor floorplan heatmap generation',
            'Optional Integrations': 'BACnet / Modbus for HVAC control feedback'
        },
        useCases: ['Data Centers / Server Rooms','Manufacturing / Clean Rooms','Libraries & Archives','Commercial Offices'],
        relatedProducts: [13, 14, 15]
    },
    {
        id: 'structural-health',
        title: 'Structural Health Monitoring (SHM)',
        category: 'infrastructure',
        heroImage: 'assets/Media/solutions/structural-health.jpg',
        heroTitle: 'Continuous Structural Integrity Monitoring for Critical Assets.',
        heroSubtitle: 'Gain verifiable, real-time data on asset health. Monitor bridges, dams, tunnels, and aging buildings for excessive vibration, tilt, and strain.',
        architectureDiagram: '',
        problem: 'Progressive structural degradation is often invisible to manual inspections. Missing slow-moving failures risks catastrophic collapse and major liability.',
        solution: 'Our IoT Gateway integrates with high-resolution geotechnical sensors to capture continuous movement and stress data, creating a living baseline that prioritizes repairs by actual need.',
        features: [
            { title: 'Safety Assurance', description: 'Continuously monitor for dangerous movement, settlement, or excessive sway', icon: 'alert-triangle' },
            { title: 'Vibration Analysis', description: 'Track RMS acceleration to assess fatigue and resonance', icon: 'activity' },
            { title: 'Displacement Tracking', description: 'Monitor tilt, settlement, and crack width over time', icon: 'trending-up' },
            { title: 'Cost-Effective Inspections', description: 'Reduce manual inspections by automating data collection', icon: 'clock' }
        ],
        technicalSpecs: {
            'Tilt & Displacement': 'Tilt (°) per axis, crack width (mm), joint displacement (mm)',
            'Dynamic Response': 'RMS acceleration (m/s²), dominant freq (Hz) via FFT',
            'Strain Sensing': 'Microstrain readings from bonded strain gauges',
            'Long-Term Trends': 'Daily/weekly baselines and cumulative movement reports',
            'Environmental Context': 'Temperature & moisture to correlate with material behaviour'
        },
        useCases: ['Bridges and Viaducts','Tunnels and Mines','Dams and Reservoirs','Aging Buildings'],
        relatedProducts: [16, 17, 18]
    },
    {
        id: 'fire-systems',
        title: 'Fire System Integration & Remote Alerting',
        category: 'safety',
        heroImage: 'assets/Media/solutions/fire-systems.jpg',
        heroTitle: 'Instant Remote Alerting and Integrity Check for Fire Systems.',
        heroSubtitle: 'Cut minutes off your emergency response time. Our IoT Gateway connects to your existing FACP to provide immediate, off-site notifications and continuous system health verification.',
        architectureDiagram: '',
        problem: 'When an alarm sounds, staff may not be nearby and hidden faults can render a system unsafe. Relying only on local panel lights risks non-compliance and slow response.',
        solution: 'Our system integrates with the FACP to digitize and transmit status updates, send real-time alerts to responders, and continuously monitor for critical faults like low battery or zone errors.',
        features: [
            { title: 'Instant Multi-User Alerts', description: 'Send critical alarms to multiple responders via SMS, email, and app notifications', icon: 'send' },
            { title: 'System Integrity Monitoring', description: 'Continuously watch for faults (low battery, zone errors) that compromise safety', icon: 'shield-check' },
            { title: 'Granular Location', description: 'Identify exact zone, floor, or detector address that triggered the event', icon: 'map-pin' },
            { title: 'Automated Event Logging', description: 'Generate unalterable, time-stamped logs for compliance and audits', icon: 'file-text' }
        ],
        technicalSpecs: {
            'Alarm States': 'Fire, Trouble, Supervisory, Test (state machine with timestamps)',
            'Panel Health': 'AC power status, battery voltage (V), battery health flags',
            'Zone Data': 'Zone/loop numbers, device addresses, detector type',
            'Event Metadata': 'Event source, acknowledged-by, response timestamps',
            'Connectivity Options': 'RS-232, dry-contact, Modbus gateways supported'
        },
        useCases: ['Commercial High-Rises','Hospitals & Data Centers','Schools & Universities'],
        relatedProducts: [19, 20, 21]
    },
    {
        id: 'scada-integration',
        title: 'SCADA & Legacy OT Integration',
        category: 'infrastructure',
        heroImage: 'assets/Media/solutions/scada-integration.jpg',
        heroTitle: 'Secure Data Bridge for SCADA and Legacy OT Networks.',
        heroSubtitle: 'Unlock proprietary OT data. Our IoT Gateway serves as a secure protocol translator, unifying legacy PLC/RTU data with your modern Cloud, ERP, and BI platforms.',
        architectureDiagram: '',
        problem: 'Industrial data is often trapped in proprietary systems using complex protocols, preventing ERP and BI systems from gaining a complete view of production health.',
        solution: 'Our gateway connects to the OT network, supports native industrial protocols, and securely translates/publishes data using IT-friendly standards to break down data silos.',
        features: [
            { title: 'Protocol Translation', description: 'Convert legacy protocols (Modbus, OPC UA, S7) into MQTT/REST for cloud ingestion', icon: 'repeat' },
            { title: 'Network Security', description: 'Maintain segregation while allowing safe data flow from OT to IT', icon: 'lock' },
            { title: 'Data Unification', description: 'Centralize mixed-vendor data into a single standardized model', icon: 'server' },
            { title: 'Bi-directional Flow (Optional)', description: 'Enable secure remote configuration or setpoint updates when required', icon: 'git-merge' }
        ],
        technicalSpecs: {
            'Protocol Support': 'Modbus RTU/TCP, OPC UA, Siemens S7, EtherNet/IP (list of drivers)',
            'Tag Mapping': 'Register-to-tag translation with metadata and scaling',
            'Telemetry Output': 'MQTT topics, HTTPS/REST endpoints, optional OPC UA client',
            'Security Controls': 'TLS, mutual auth, VLAN segregation, read-only gateway mode',
            'Diagnostics & Health': 'Poll latency, connection uptime, register error rates'
        },
        useCases: ['Manufacturing (OEE extraction)','Water/Gas Utilities (RTU centralization)','Process Industries (ERP integration)'],
        relatedProducts: [22, 23, 24]
    },
    {
        id: 'advertising-boards',
        title: 'Digital Signage & Advertising Board Monitoring',
        category: 'monitoring',
        heroImage: 'assets/Media/solutions/advertising-boards.jpg',
        heroTitle: 'Operational Assurance for Advertising Boards.',
        heroSubtitle: 'Gain real-time Proof of Operation and optimize energy costs across your entire Out-of-Home (OOH) media inventory using secure IoT data.',
        architectureDiagram: '',
        problem: 'Verifying run-time for clients and managing electricity costs across dispersed boards is inefficient and prone to human error, increasing OpEx.',
        solution: 'Our IoT Gateway installs easily to provide verifiable, time-stamped status and power consumption data, eliminating billing disputes and simplifying maintenance.',
        features: [
            { title: 'Proof of Operation (P.O.O.)', description: 'Deliver verifiable reports proving the board was powered during contracted times', icon: 'check-circle' },
            { title: 'Energy Cost Control', description: 'Monitor kWh consumption to identify boards with abnormally high usage', icon: 'dollar-sign' },
            { title: 'Automated Status Alerts', description: 'Get immediate notifications if a board goes offline outside scheduled time', icon: 'bell' },
            { title: 'Location & Geo-fencing', description: 'Use integrated GPS to confirm location and asset security', icon: 'map-pin' }
        ],
        technicalSpecs: {
            'Operational Status': 'Power ON/OFF, scheduled play-state vs actual (timestamped)',
            'Power Consumption': 'Instant power (W), cumulative energy (kWh) per billing period',
            'Ambient Sensing': 'Lux sensor readings for adaptive brightness (lux)',
            'Asset Location': 'GPS coords, geo-fence breach events, tilt for tamper detection'
        },
        useCases: ['OOH Media Companies','Retail Chains (digital menu boards)','Smart City Projects'],
        relatedProducts: [25, 26, 27]
    },
    {
        id: 'cold-storage',
        title: 'Cold Storage Monitoring & Compliance',
        category: 'safety',
        heroImage: 'assets/Media/solutions/cold-storage.jpg',
        heroTitle: 'Mandatory Compliance and Inventory Protection for Cold Storage.',
        heroSubtitle: 'Ensure product integrity and meet regulatory standards with continuous, verifiable monitoring of temperature, humidity, and critical asset status.',
        architectureDiagram: '',
        problem: 'Temperature excursions caused by minor issues or human error can lead to expensive spoilage, insurance claims, and regulatory penalties.',
        solution: 'Our IoT Gateway provides automated, precise thermal logging and instant multi-channel alerts for any deviation, ensuring continuous, audit-ready data integrity.',
        features: [
            { title: 'Automated Audit Trails', description: 'Generate time-stamped, unalterable logs of temperature history for compliance', icon: 'file-text' },
            { title: 'Spoilage Prevention', description: 'Instant alerts when temperature or humidity breaches safe zones', icon: 'alert-triangle' },
            { title: 'Door Ajar Alerts', description: 'Notify staff immediately when doors are left improperly sealed', icon: 'door-open' },
            { title: 'Equipment Monitoring', description: 'Track compressor cycling and run-time for efficient diagnosis', icon: 'activity' }
        ],
        technicalSpecs: {
            'Probe Accuracy': 'High-accuracy temp probes (±0.2°C), RH probes (±1% RH)',
            'Chamber Status': 'Door open/close, compressor run-state, defrost cycles',
            'Energy Use': 'Compressor kWh, duty-cycle percentage, peak-start events',
            'Compliance Metric': 'Mean Kinetic Temperature (MKT), HACCP-ready logs',
            'Alerting': 'Multi-channel alerts with escalation (SMS → Email → App)'
        },
        useCases: ['Pharmaceutical Warehouses','Food Processing','Commercial Kitchens','Refrigerated Logistics'],
        relatedProducts: [28, 29, 30]
    },
    {
        id: 'tank-silo',
        title: 'Tank & Silo Level Monitoring',
        category: 'monitoring',
        heroImage: 'assets/Media/solutions/tank-silo.jpg',
        heroTitle: 'Accurate Inventory Tracking and Spillage Prevention for Tanks and Silos.',
        heroSubtitle: 'Gain continuous, real-time visibility into liquid, powder, or granular material levels. Automate logistics and eliminate overflow risks with reliable sensor data.',
        architectureDiagram: '',
        problem: 'Manual dipstick readings are inaccurate and dangerous. Lack of continuous monitoring risks stock-outs, production delays, or hazardous environmental spillage.',
        solution: 'Our IoT Gateway integrates with level sensors, co    nverting distance readings into calibrated volume and weight. Set automated thresholds for reorder points and receive immediate high-level alerts.',
        features: [
            { title: 'Real-Time Inventory', description: 'Accurate volume counts 24/7 enabling JIT procurement and better forecasting', icon: 'database' },
            { title: 'Spillage Prevention', description: 'Instant alerts at high-level critical thresholds to avoid overflow', icon: 'alert-octagon' },
            { title: 'Worker Safety', description: 'Eliminate risky manual checks by providing remote level visibility', icon: 'user-check' },
            { title: 'Consumption Tracking', description: 'Monitor average daily usage rate and detect inconsistencies', icon: 'trending-down' }
        ],
        technicalSpecs: {
            'Level Measurement': 'Distance-to-surface (mm) via ultrasonic/radar, calibrated to % full',
            'Volume Calculations': 'Converted volume (m³, L) using tank geometry tables',
            'Mass/Weight (optional)': 'Calculated weight (tons) if density provided',
            'Dynamics': 'Fill/empty rate (L/hr), flow-derived consumption verification',
            'Sensor Health': 'Echo strength, signal loss, diagnostic error codes'
        },
        useCases: ['Chemical Plants','Agriculture / Farming','Water Treatment','Retail Fuel Stations'],
        relatedProducts: [31, 32, 33]
    }
];

// Function to get solution by ID
function getSolutionById(id) {
    return solutions.find(solution => solution.id === id);
}

// Function to get related products
function getRelatedProducts(ids) {
    // This would need to reference the products array from products.js
    return [];
}
