// Product Database
const products = [
  // Gateways
  {
    id: 1,
    category: "gateways",
    name: "WIFI MODBUS GATEWAY (TSGTW100)",
    description:
      "Industrial IoT gateway connecting Modbus RTU/ASCII devices to WiFi networks with cloud integration and secure communication.",
    price: "N/A",
    heroBg: "transparent",
    heroBgImage: "assets/IMG_0569.JPG",
    image: "assets/Media/device/products/WIFIMODBUSGATEWAY.jpg",
    communication: ["wifi", "modbus-rtu", "modbus-tcp", "mqtts", "http", "ftp"],
    power: ["9-30v-dc"],
    io: ["rs485"],
    application: [
      "remote-monitoring",
      "factory-automation",
      "scada-integration",
    ],

    technicalSpecs: [
      {
        id: 1,
        title: "Power Supply Specifications",
        rows: [
          { label: "Supply Voltage", value: "12-24 V DC" },
          { label: "Reverse Polarity Protection", value: "0-24 V DC" },
          { label: "Max Operating Current", value: "100 mA" },
          {
            label: "Peak Operating Current",
            value: "2 A (network activities)",
          },
        ],
      },
      {
        id: 2,
        title: "Communication Features",
        rows: [
          { label: "WIFI", value: "IEEE 802.11 Wireless Network" },
          { label: "4G LTE/FDD", value: "NA" },
          { label: "2G GSM", value: "NA" },
        ],
      },
      {
        id: 3,
        title: "Interfaces / IO Capabilities",
        rows: [
          { label: "RS-485", value: "1" },
          { label: "Ethernet", value: "0" },
          { label: "Cellular Antenna", value: "External (if req)" },
          { label: "SIM Type", value: "Not Available" },
          { label: "Flash", value: "64 MB" },
          { label: "Memory", value: "512kb" },
          { label: "Real Time Clock", value: "External with battery backup" },
          { label: "Watchdog", value: "External" },
          { label: "LED Indication", value: "Available" },
          { label: "Serial Port", value: "USB Mini" },
        ],
      },
      {
        id: 4,
        title: "Communication Protocol Support",
        rows: [
          {
            label: "Industrial Protocols",
            value:
              "1. Transparent Modbus RTU<br>2. Modbus RTU Polling<br>3. Modbus RTU over TCP<br>4. Modbus RTU Slave Mode",
          },
          {
            label: "IP Application Protocols",
            value: "1. TCP/IP<br>2. HTTP/HTTPS<br>3. MQTT/MQTTs<br>4. FTP",
          },
        ],
      },
      {
        id: 5,
        title: "Physical Specifications",
        rows: [{ label: "Dimensions (L × W × H)", value: "47 × 100 × 60 mm" }],
      },
      {
        id: 6,
        title: "Operating Environment",
        rows: [
          { label: "Operating Temperature", value: "-10°C to 70°C" },
          { label: "Operating Humidity", value: "Up to 85% RH" },
          { label: "Vibration Resistance", value: "2 g, 10-150 Hz" },
          { label: "Enclosure Protection", value: "IP20 (Indoor)" },
          { label: "Installation", value: "DIN Rail Mount" },
        ],
      },
    ],
    customizationOptions: [
      "Custom protocol integration",
      "White-labeled Web UI",
      "Hardware variants with Cellular or Ethernet connectivity",
    ],
  },
  {
    id: 2,
    category: "gateways",
    name: "4G ETH GATEWAY (TSGTW 1002)",
    description:
      "4G IoT gateway for industrial applications with MODBUS support and secure cloud connectivity.",
    price: "N/A",
    heroBgImage: "assets/Desktop_1440 x 626 px_4G_ETH_GATEWAY.jpg",
    image: "assets/Media/device/products/4G_ETH_GATEWAY.jpg",
    communication: [
      "4g",
      "ethernet",
      "modbus-tcp",
      "modbus-rtu",
      "mqtts",
      "https",
      "ftp",
      "tcp",
      "udp",
      "http",
      "dhcp",
      "dns",
    ],
    power: ["12-24v-dc"],
    io: ["rj45", "usb", "lcd-connector"],
    application: [
      "data-logging",
      "remote-monitoring",
      "industrial-automation",
      "energy-management",
      "smart-grid",
      "environmental-monitoring",
    ],
    technicalSpecs: [
      {
        id: 1,
        title: "Power Supply Specifications",
        rows: [
          { label: "Supply Voltage", value: "12-24 V DC" }, // TSGWET0001
          { label: "Reverse Polarity Protection", value: "0-24 V DC" }, // TSGWET0001
          { label: "Max Operating Current", value: "100 mA" }, // TSGWET0001
          {
            label: "Peak Operating Current",
            value: "2 A (network activities)",
          }, // TSGWET0001
        ],
      },
      {
        id: 2,
        title: "Communication Features",
        rows: [
          { label: "GSM/GPRS", value: "NA" }, // TSGWET0001
          { label: "WIFI", value: "NA" }, // TSGWET0001
          { label: "GNSS Positioning", value: "NA" }, // TSGWET0001
          { label: "GPS", value: "NA" }, // TSGWET0001
          { label: "4G LTE/FDD", value: "B1, B3, B5, B7, B8, B20" }, // TSGWET0001
          { label: "4G LTE/TDD", value: "B38, B40, B41" }, // TSGWET0001
          { label: "WCDMA", value: "B1, B5, B8" }, // TSGWET0001
          { label: "2G GSM", value: "900 / 1800 MHz" }, // TSGWET0001
        ],
      },
      {
        id: 3,
        title: "Interfaces / IO Capabilities",
        rows: [
          { label: "RS-485", value: "0" }, // TSGWET0001
          { label: "Ethernet", value: "1" }, // TSGWET0001
          { label: "GNSS Antenna", value: "External (if req)" }, // TSGWET0001
          { label: "Cellular Antenna", value: "External" }, // TSGWET0001
          { label: "SIM Type", value: "Micro SIM" }, // TSGWET0001
          { label: "Flash", value: "64 MB" }, // TSGWET0001
          { label: "Memory", value: "512kb" }, // TSGWET0001
          { label: "Real Time Clock", value: "External with battery backup" }, // TSGWET0001
          { label: "Watchdog", value: "External" }, // TSGWET0001
          { label: "LED Indication", value: "Available" }, // TSGWET0001
          { label: "Serial Port", value: "USB Mini" }, // TSGWET0001
        ],
      },
      {
        id: 4,
        title: "Communication Protocol Support",
        rows: [
          { label: "Industrial Protocols", value: "Not Supported" }, // TSGWET0001
          {
            label: "IP Application Protocols",
            value: "1. TCP/IP\n2. HTTP/HTTPS\n3. MQTT/MQTTs\n4. FTP",
          }, // TSGWET0001
        ],
      },
      {
        id: 5,
        title: "Physical Specifications",
        rows: [
          { label: "Dimensions (L × W × H)", value: "70 × 100 × 60 mm" }, // TSGWET0001
        ],
      },
      {
        id: 6,
        title: "Operating Environment",
        rows: [
          { label: "Operating Temperature", value: "-40°C to 85°C" }, // TSGWET0001
          { label: "Operating Humidity", value: "Up to 85% RH" }, // TSGWET0001
          { label: "Vibration Resistance", value: "2 g, 10-150 Hz" }, // TSGWET0001
          { label: "Enclosure Protection", value: "IP20 (Indoor)" }, // TSGWET0001
          { label: "Installation", value: "DIN Rail Mount" }, // TSGWET0001
        ],
      },
    ],
    useCases: [
      "Remote data monitoring of MODBUS-based sensors and controllers",
      "Energy management and smart grid applications",
      "Industrial process automation",
      "Weather and environmental data collection",
      "Solar and renewable energy monitoring systems",
      "Smart infrastructure and building management",
    ],

    cloudFeatures: [
      "Device Management: Add/delete devices with real-time status and geolocation",
      "Live Data Monitoring: Centralized GUI for multiple parameters",
      "Graphical Representation: Time-based trend charts",
      "Historical Data: Customizable reporting with export options",
      "Alerts & Automation: Conditional alerts with SMS/email triggers",
      "User Management: Multi-tier access control",
    ],
    customizationOptions: [
      "Custom protocol integration",
      "White-labeled Web UI",
      "Extended storage options (SD Card/USB)",
    ],
  },

  // Sensor Node
  {
    id: 3,
    category: "sensors",
    name: "LORAWAN Sensor Node (TSNODE0001)",
    description:
      "Long-range LoRaWAN sensor node for industrial IoT applications with ultra-low power consumption and secure data transmission.",
    price: "N/A",
    heroBgImage: "assets/LoRaWan.jpg",
    image: "assets/Media/device/products/SENSOR_NODE_LORAWAN.jpg",
    communication: ["lorawan", "lora", "ftp", "mqtts", "https", "tcp"],
    power: ["6-12v-dc", "li/socl2-battery"],
    io: [
      "rs232/usb",
      "digital-input",
      "i/o-pins",
      "i2c",
      "lpusart1",
      "usb",
      "adc",
      "dac",
    ],
    application: [
      "wireless-sensor-networks",
      "smart-cities",
      "irrigation-systems",
      "industrial-monitoring",
      "smart-metering",
      "automation-systems",
    ],
    technicalSpecs: [
      {
        id: 1,
        title: "Power Supply Specifications",
        rows: [
          { label: "Supply Voltage", value: "7.2 V DC" },
          { label: "Reverse Polarity Protection", value: "7.2 V DC" },
          { label: "Max Operating Current", value: "< 100 mA" },
          {
            label: "Peak Operating Current",
            value: "2 A @ network activities",
          },
        ],
      },
      {
        id: 2,
        title: "Communication Features",
        rows: [
          { label: "GSM/GPRS", value: "NA" },
          { label: "WIFI", value: "IEEE 802.11 Wireless Network" },
          {
            label: "Wireless Frequency Band & Communication",
            value: "Accuracy Rate: LoRaWAN ≥ 95%",
          },
          { label: "LoRaWAN Band", value: "ISM Band 865–867 MHz" },
          {
            label: "Radio Communication Distance",
            value: "Minimum 1 km radius",
          },
        ],
      },
      {
        id: 3,
        title: "Interfaces / IO Capabilities",
        rows: [
          { label: "RS-485", value: "0" },
          { label: "GNSS Antenna", value: "External (If required)" },
          { label: "Cellular Antenna", value: "External" },
          { label: "SIM Type", value: "NA" },
          { label: "Flash Memory", value: "64 MB" },
          { label: "RAM Memory", value: "512 KB" },
          { label: "Real Time Clock", value: "External with battery backup" },
          { label: "Watchdog", value: "External" },
          { label: "LED Indication", value: "Available" },
          { label: "Serial Port", value: "USB Mini" },
        ],
      },
      {
        id: 4,
        title: "Communication Protocol Support",
        rows: [
          {
            label: "IP & Application Protocols",
            value: "1. TCP/IP<br>2. HTTP/HTTPS",
          },
        ],
      },
      {
        id: 5,
        title: "Physical Specifications",
        rows: [
          { label: "Dimensions (L × W × H)", value: "197 × 90 × 60 mm" },
          { label: "Installation", value: "DIN Rail Mount" },
        ],
      },
      {
        id: 6,
        title: "Operating Environment",
        rows: [
          { label: "Operating Temperature", value: "−10 °C to +70 °C" },
          { label: "Operating Humidity", value: "Up to 85% RH" },
          { label: "Vibration Resistance", value: "2 g, 10–150 Hz" },
          { label: "Enclosure Protection", value: "IP20 (Indoor)" },
        ],
      },
    ],
    powerPerformance: {
      stopMode: "2.7 µA @ 3.3V",
      transmitMode: "125 mA @ 20 dBm, 44 mA @ 14 dBm",
      batteryType: "Li/SOCl₂ (non-rechargeable)",
      capacity: "4000mAh or 8500mAh",
      selfDischarge: "<1% / Year @ 25°C",
      boostCurrent: "2A for 1 second",
    },
    useCases: [
      "Wireless Alarm and Security Systems",
      "Home and Building Automation",
      "Automated Meter Reading",
      "Smart City Deployments",
      "Long-Range Irrigation Systems",
      "Industrial Monitoring and Control Systems",
    ],
    additionalFeatures: [
      "Ultra-low power consumption design",
      "Integrated LoRa™ modem with preamble detection",
      "AT command-based parameter configuration",
      "Open-source STM32Cube HAL-based firmware",
      "Rapid prototyping support with public libraries",
      "High interference immunity and extended coverage",
    ],
    customizationOptions: [
      "Custom sensor integration",
      "Firmware customization",
      "Battery capacity options",
      "Custom frequency bands",
      "Enclosure customization",
    ],
  },

  // Controllers / RTUs (Remote Terminal Units)
  {
    id: 4,
    category: "controllers",
    name: "4G MODBUS IO RTU (TSRTU6660)",
    description:
      "Versatile industrial RTU with 4G, LoRa, WiFi, BLE, and Zigbee support for comprehensive IoT connectivity.",
    price: "N/A",
    heroBgImage: "assets/Desktop_1440 x 626 px_6CH_RTU.jpg",
    image: "assets/Media/device/products/4G_MODBUS_IO_RTU.jpg",
    communication: [
      "4g",
      "lte",
      "lorawan",
      "wifi",
      "ble",
      "zigbee",
      "modbus-rtu",
      "modbus-tcp",
      "mqtts",
      "https",
      "ftp",
      "tcp",
      "udp",
      "dns",
      "dhcp",
    ],
    power: ["12-24v-dc"],
    io: ["di-6", "ai-6", "relay-op-6", "rs485", "usb", "lcd-connector"],
    application: [
      "remote-monitoring",
      "industrial-automation",
      "data-logging",
      "building-management",
      "water-treatment",
      "renewable-monitoring",
      "asset-telemetry",
    ],

    technicalSpecs: [
      {
        id: 1,
        title: "Power Supply Specifications",
        rows: [
          { label: "Supply Voltage", value: "12–24 V DC" },
          { label: "Reverse Polarity Protection", value: "0–24 V DC" },
          { label: "Max Operating Current", value: "< 100 mA" },
          {
            label: "Peak Operating Current",
            value: "2 A @ network activities",
          },
        ],
      },
      {
        id: 2,
        title: "Communication Features",
        rows: [
          {
            label: "GSM/GPRS",
            value:
              "4G LTE-FDD (B1 / B3 / B5 / B7 / B8 / B20), LTE-TDD (B38 / B40 / B41), WCDMA (B1 / B5 / B8), 2G GSM (900 / 1800 MHz)",
          },
          { label: "WIFI", value: "NA" },
        ],
      },
      {
        id: 3,
        title: "Interfaces / IO Capabilities",
        rows: [
          { label: "Digital Input", value: "6" },
          { label: "Digital Output", value: "6" },
          { label: "Analog Input", value: "6" },
          { label: "Analog Output", value: "0" },
          { label: "RS-485", value: "1" },
          { label: "Counter Input", value: "0" },
          { label: "Ethernet", value: "0" },
          { label: "GNSS Antenna", value: "External" },
          { label: "Cellular Antenna", value: "External GSM" },
          { label: "SIM Type", value: "Micro SIM" },
          { label: "Flash Memory", value: "64 MB" },
          { label: "RAM Memory", value: "512 KB" },
          { label: "Real Time Clock", value: "External with battery backup" },
          { label: "Watchdog", value: "External" },
          { label: "LED Indication", value: "Available" },
          { label: "Serial Port", value: "USB Mini" },
          { label: "Display", value: "Not Available" },
        ],
      },
      {
        id: 4,
        title: "Communication Protocol Support",
        rows: [
          {
            label: "Industrial Protocols",
            value:
              "1. Transparent Modbus RTU<br>2. Modbus RTU Polling<br>3. Modbus RTU over TCP<br>4. Modbus RTU (Slave Mode)",
          },
          {
            label: "IP & Application Protocols",
            value: "1. TCP/IP<br>2. HTTP/HTTPS<br>3. MQTT / MQTTs<br>4. FTP",
          },
        ],
      },
      {
        id: 5,
        title: "Physical Specifications",
        rows: [
          { label: "Dimensions (L × W × H)", value: "130 × 100 × 60 mm" },
          { label: "Installation", value: "DIN Rail Mount" },
        ],
      },
      {
        id: 6,
        title: "Operating Environment",
        rows: [
          { label: "Operating Temperature", value: "−10 °C to +70 °C" },
          { label: "Operating Humidity", value: "Up to 85% RH" },
          { label: "Vibration Resistance", value: "2 g, 10–150 Hz" },
          { label: "Enclosure Protection", value: "IP20 (Indoor)" },
        ],
      },
    ],

    useCases: [
      "Remote energy and meter monitoring",
      "Industrial automation and process control",
      "Building management and security systems",
      "Water treatment and irrigation control",
      "Solar inverter and renewable monitoring",
      "Asset telemetry and environmental sensing",
    ],
    cloudFeatures: [
      "Device Summary: Site-wise device list with geolocation",
      "Live Monitoring: Centralized GUI for multiple parameters",
      "Graphing: Time-based trend charts with multiple visualizations",
      "Historical Data: WYSIWYG report builder with scheduling",
      "Alerts: Conditional rules with SMS/email notifications",
      "User Management: Multi-tier role-based access control",
    ],
    additionalFeatures: [
      "Supports complex interlocking logic",
      "Ideal for mixed-protocol deployments",
      "Optional storage expansion",
      "Removable media for field data extraction",
      "SMS-based configuration and control",
      "Local logic reduces PLC dependency",
    ],
    customizationOptions: [
      "Protocol customization",
      "I/O configuration",
      "Enclosure modifications",
      "Custom firmware development",
      "Cloud platform integration",
    ],
  },
  {
    id: 5,
    category: "controllers",
    name: "4G MODBUS RTU (TSRTU33314G)",
    description:
      "Industrial RTU with 4G, LoRa, and WiFi for reliable data collection and cloud connectivity.",
    price: "N/A",
    heroBgImage: "assets/Desktop_1440 x 626 px_6CH_RTU.jpg",
    image: "assets/Media/device/products/4GMODBUS_RTU.jpg",
    communication: [
      "4g",
      "lte",
      "lorawan",
      "wifi",
      "ble",
      "zigbee",
      "modbus-rtu",
      "modbus-tcp",
      "mqtts",
      "https",
      "ftp",
      "tcp",
      "udp",
      "dns",
      "dhcp",
    ],
    power: {
      supply: "12–24V DC with reverse polarity protection",
      isolation: "1500 VRMS on relevant ports",
      consumption: "To be specified",
    },
    technicalSpecs: [
      {
        id: 1,
        title: "Power Supply Specifications",
        rows: [
          { label: "Supply Voltage", value: "12–24 V DC" },
          { label: "Reverse Polarity Protection", value: "0–24 V DC" },
          { label: "Max Operating Current", value: "< 100 mA" },
          {
            label: "Peak Operating Current",
            value: "2 A @ network activities",
          },
        ],
      },
      {
        id: 2,
        title: "Communication Features",
        rows: [
          {
            label: "GSM/GPRS",
            value:
              "4G LTE-FDD (B1 / B3 / B5 / B7 / B8 / B20), LTE-TDD (B38 / B40 / B41), WCDMA (B1 / B5 / B8), 2G GSM (900 / 1800 MHz)",
          },
          { label: "WIFI", value: "NA" },
        ],
      },
      {
        id: 3,
        title: "Interfaces / IO Capabilities",
        rows: [
          { label: "Digital Input", value: "3" },
          { label: "Digital Output", value: "0" },
          { label: "Analog Input", value: "3" },
          { label: "Analog Output", value: "0" },
          { label: "RS-485", value: "1" },
          { label: "Counter Input", value: "1 (Counter Input)" },
          { label: "Ethernet", value: "0" },
          { label: "GNSS Antenna", value: "External" },
          { label: "Cellular Antenna", value: "External GSM" },
          { label: "SIM Type", value: "Micro SIM" },
          { label: "Flash Memory", value: "64 MB" },
          { label: "RAM Memory", value: "512 KB" },
          { label: "Real Time Clock", value: "External with battery backup" },
          { label: "Watchdog", value: "External" },
          { label: "LED Indication", value: "Available" },
          { label: "Serial Port", value: "USB Mini" },
          { label: "Display", value: "16X2 LCD" },
        ],
      },
      {
        id: 4,
        title: "Communication Protocol Support",
        rows: [
          {
            label: "Industrial Protocols",
            value:
              "1. Transparent Modbus RTU<br>2. Modbus RTU Polling<br>3. Modbus RTU over TCP<br>4. Modbus RTU (Slave Mode)",
          },
          {
            label: "IP & Application Protocols",
            value: "1. TCP/IP<br>2. HTTP/HTTPS<br>3. MQTT / MQTTs<br>4. FTP",
          },
        ],
      },
      {
        id: 5,
        title: "Physical Specifications",
        rows: [
          { label: "Dimensions (L × W × H)", value: "130 × 100 × 60 mm" },
          { label: "Installation", value: "DIN Rail Mount" },
        ],
      },
      {
        id: 6,
        title: "Operating Environment",
        rows: [
          { label: "Operating Temperature", value: "−40 °C to +85 °C" },
          { label: "Operating Humidity", value: "Up to 85% RH" },
          { label: "Vibration Resistance", value: "2 g, 10–150 Hz" },
          { label: "Enclosure Protection", value: "IP20 (Indoor)" },
        ],
      },
    ],

    customizationOptions: [
      "Protocol customization",
      "I/O configuration",
      "Enclosure modifications",
      "Custom firmware development",
      "Cloud platform integration",
    ],
  },
  {
    id: 6,
    category: "controllers",
    name: "4G MODBUS IO MINI RTU (TSRTU2200)",
    description:
      "Compact RTU with 4G and multi-radio support for industrial IoT data collection and transmission.",
    price: "N/A",
    heroBgImage: "assets/Desktop_1440 x 626 px_V10_4G.jpg",
    image: "assets/Media/device/products/MINI_RTU.jpg",
    communication: [
      "4g",
      "lte",
      "lorawan",
      "wifi",
      "ble",
      "zigbee",
      "modbus-rtu",
      "modbus-tcp",
      "mqtts",
      "https",
      "ftp",
      "tcp",
      "udp",
      "dns",
      "dhcp",
    ],
    technicalSpecs: [
      {
        id: 1,
        title: "Power Supply Specifications",
        rows: [
          { label: "Supply Voltage", value: "12–24 V DC" },
          { label: "Reverse Polarity Protection", value: "0–24 V DC" },
          { label: "Max Operating Current", value: "< 100 mA" },
          {
            label: "Peak Operating Current",
            value: "2 A @ network activities",
          },
        ],
      },
      {
        id: 2,
        title: "Communication Features",
        rows: [
          {
            label: "GSM/GPRS",
            value:
              "4G LTE-FDD (B1 / B3 / B5 / B7 / B8 / B20), LTE-TDD (B38 / B40 / B41), WCDMA (B1 / B5 / B8), 2G GSM (900 / 1800 MHz)",
          },
          { label: "WIFI", value: "NA" },
        ],
      },
      {
        id: 3,
        title: "Interfaces / IO Capabilities",
        rows: [
          { label: "Digital Input", value: "2" },
          { label: "Digital Output", value: "0" },
          { label: "Analog Input", value: "2" },
          { label: "Analog Output", value: "0" },
          { label: "RS-485", value: "1" },
          { label: "Counter Input", value: "1 (Counter Input)" },
          { label: "Ethernet", value: "0" },
          { label: "GNSS Antenna", value: "External" },
          { label: "Cellular Antenna", value: "External" },
          { label: "SIM Type", value: "Micro SIM" },
          { label: "Flash Memory", value: "64 MB" },
          { label: "RAM Memory", value: "512 KB" },
          { label: "Real Time Clock", value: "External with battery backup" },
          { label: "Watchdog", value: "External" },
          { label: "LED Indication", value: "Available" },
          { label: "Serial Port", value: "USB Mini" },
          { label: "Display", value: "Not Available" },
        ],
      },
      {
        id: 4,
        title: "Communication Protocol Support",
        rows: [
          {
            label: "Industrial Protocols",
            value:
              "1. Transparent Modbus RTU<br>2. Modbus RTU Polling<br>3. Modbus RTU over TCP<br>4. Modbus RTU (Slave Mode)",
          },
          {
            label: "IP & Application Protocols",
            value: "1. TCP/IP<br>2. HTTP/HTTPS<br>3. MQTT / MQTTs<br>4. FTP",
          },
        ],
      },
      {
        id: 5,
        title: "Physical Specifications",
        rows: [
          { label: "Dimensions (L × W × H)", value: "70 × 100 × 60 mm" },
          { label: "Installation", value: "DIN Rail Mount" },
        ],
      },
      {
        id: 6,
        title: "Operating Environment",
        rows: [
          { label: "Operating Temperature", value: "−40 °C to +85 °C" },
          { label: "Operating Humidity", value: "Up to 85% RH" },
          { label: "Vibration Resistance", value: "2 g, 10–150 Hz" },
          { label: "Enclosure Protection", value: "IP20 (Indoor)" },
        ],
      },
    ],

    useCases: [
      "Compact site telemetry and remote I/O",
      "Energy and meter monitoring in space-constrained panels",
      "Building automation and security systems",
      "Water and irrigation control",
      "Solar and renewable energy monitoring",
      "Remote asset telemetry and environmental sensing",
    ],
    cloudFeatures: [
      "Device Summary: Site-wise device list with geolocation",
      "Live Monitoring: Centralized GUI for multiple parameters",
      "Graphing: Time-based trend charts with multiple visualizations",
      "Historical Data: WYSIWYG report builder with scheduling",
      "Alerts: Conditional rules with SMS/email notifications",
      "User Management: Multi-tier role-based access control",
    ],
    additionalFeatures: [
      "Mini RTU variant with 2 AI / 2 DI / 2 Relay outputs",
      "Ideal for space-constrained installations",
      "Supports complex interlocking logic",
      "Ideal for mixed-protocol deployments",
      "Optional storage expansion",
      "Removable media for field data extraction",
      "SMS-based configuration and control",
      "Local logic reduces PLC dependency",
    ],
    customizationOptions: [
      "Protocol customization",
      "I/O configuration",
      "Enclosure modifications",
      "Custom firmware development",
      "Cloud platform integration",
    ],
  },
  {
    id: 7,
    category: "io-modules",
    name: "MINI ETHERNET 4CH IO Card (TSIOC003)",
    description:
      "Ethernet MODBUS RTU/IO module with cloud connectivity and PLC-like logic for industrial automation.",
    price: "N/A",
    heroBgImage: "assets/Desktop_1440 x 626 px_MINIETH_IOCARD-NON.jpg",
    image: "assets/Media/device/products/MINIETH_IOCARD.jpg",
    communication: [
      "ethernet",
      "modbus-rtu",
      "modbus-tcp",
      "mqtts",
      "https",
      "http",
      "ftp",
      "tcp",
      "udp",
      "dns",
      "dhcp",
    ],
    technicalSpecs: [
      {
        id: 1,
        title: "Power Supply Specifications",
        rows: [
          { label: "Supply Voltage", value: "12–24 V DC" },
          { label: "Reverse Polarity Protection", value: "0–24 V DC" },
          { label: "Max Operating Current", value: "< 100 mA" },
          {
            label: "Peak Operating Current",
            value: "2 A @ network activities",
          },
        ],
      },
      {
        id: 2,
        title: "Communication Features",
        rows: [
          { label: "GSM/GPRS", value: "NA" },
          { label: "WIFI", value: "IEEE 802.11 Wireless Network" },
        ],
      },
      {
        id: 3,
        title: "Interfaces / IO Capabilities",
        rows: [
          { label: "Digital Input", value: "8" },
          { label: "Digital Output", value: "8" },
          { label: "Analog Input", value: "8" },
          { label: "Analog Output", value: "1" },
          { label: "RS-485", value: "1" },
          { label: "Counter Input", value: "0" },
          { label: "Ethernet", value: "1" },
          { label: "Antenna", value: "External WIFI" },
          { label: "SIM Type", value: "Micro SIM" },
          { label: "Flash Memory", value: "64 MB" },
          { label: "RAM Memory", value: "512 KB" },
          { label: "Real Time Clock", value: "External with battery backup" },
          { label: "Watchdog", value: "External" },
          { label: "LED Indication", value: "Available" },
          { label: "Serial Port", value: "USB Mini" },
        ],
      },
      {
        id: 4,
        title: "Communication Protocol Support",
        rows: [
          {
            label: "Industrial Protocols",
            value:
              "1. Transparent Modbus RTU<br>2. Modbus RTU Polling<br>3. Modbus RTU over TCP<br>4. Modbus RTU (Slave Mode)",
          },
          {
            label: "IP & Application Protocols",
            value: "1. TCP/IP<br>2. HTTP/HTTPS<br>3. MQTT / MQTTs<br>4. FTP",
          },
        ],
      },
      {
        id: 5,
        title: "Physical Specifications",
        rows: [
          { label: "Dimensions (L × W × H)", value: "130 × 100 × 60 mm" },
          { label: "Installation", value: "DIN Rail Mount" },
        ],
      },
      {
        id: 6,
        title: "Operating Environment",
        rows: [
          { label: "Operating Temperature", value: "−40 °C to +85 °C" },
          { label: "Operating Humidity", value: "Up to 85% RH" },
          { label: "Vibration Resistance", value: "2 g, 10–150 Hz" },
          { label: "Enclosure Protection", value: "IP65" },
        ],
      },
    ],
    useCases: [
      "Industrial process control and automation",
      "SCADA and energy monitoring",
      "Environmental and sensor data acquisition",
      "Smart building systems and security",
      "Remote I/O expansion for Modbus networks",
      "Solar and renewable monitoring systems",
    ],
    cloudFeatures: [
      "Device Management: Add/remove devices, geolocation, health status",
      "Live Data Monitoring: Centralized dashboard with real-time tracking",
      "Graphical Representation: Multi-format trend charts",
      "Historical Data & Reporting: Customizable WYSIWYG reports",
      "Alert Management: Conditional rules with SMS/email notifications",
      "Audit Logging: Historical alert logs for compliance",
      "User Management: Role-based multi-tier access control",
    ],
    additionalFeatures: [
      "Advanced interlocking logic reduces PLC dependency",
      "Dual analog output support for actuator control",
      "Ethernet-based RTU for panel and PLC integration",
      "Compact DIN-rail design for industrial cabinets",
      "Multiple configuration methods",
      "Industrial-grade reliability",
      "Wide operating temperature range",
      "Optional extended storage for data logging",
    ],
    customizationOptions: [
      "Protocol customization",
      "I/O configuration",
      "Enclosure modifications",
      "Custom firmware development",
      "Cloud platform integration",
    ],
  },

  {
    id: 8,
    category: "gateways",
    name: "4G MODBUS GATEWAY v1 (TSGTW1003)",
    description:
      "Compact 4G-enabled MODBUS RTU gateway for remote industrial automation.",
    price: "N/A",
    heroBgImage: "assets/Desktop_1440 x 626 px_4G_MODBUS_GATEWAYV1.jpg",
    image: "assets/Media/device/products/4G_MODBUS_GATEWAY.jpg",
    communication: [
      "4G",
      "modbus-gateway",
      "modbus-tcp",
      "mqtts",
      "https",
      "http",
      "ftp",
      "tcp",
      "udp",
      "dns",
      "dhcp",
    ],
technicalSpecs: [
  {
    id: 1,
    title: "Power Supply Specifications",
    rows: [
      { label: "Supply Voltage", value: "12–24 V DC" },
      { label: "Reverse Polarity Protection", value: "0–24 V DC" },
      { label: "Max Operating Current", value: "< 100 mA" },
      { label: "Peak Operating Current", value: "2 A @ network activities" }
    ]
  },
  {
    id: 2, 
    title: "Communication Features",
    rows: [
      { label: "GSM/GPRS", value: "4G LTE-FDD (B1 / B3 / B5 / B7 / B8 / B20), LTE-TDD (B38 / B40 / B41), WCDMA (B1 / B5 / B8), 2G GSM (900 / 1800 MHz)" },
      { label: "WIFI", value: "NA" },
      { label: "GNSS (Positioning)", value: "NA" }
    ]
  },
  {
    id: 3,
    title: "Interfaces / IO Capabilities", 
    rows: [
      { label: "RS-485", value: "0" },
      { label: "Ethernet", value: "1" },
      { label: "GNSS Antenna", value: "External (if required)" },
      { label: "Cellular Antenna", value: "External" },
      { label: "SIM Type", value: "Micro SIM" },
      { label: "Flash Memory", value: "64 MB" },
      { label: "RAM Memory", value: "512 KB" },
      { label: "Real Time Clock", value: "External with battery backup" },
      { label: "Watchdog", value: "External" },
      { label: "LED Indication", value: "Available" },
      { label: "Serial Port", value: "USB Mini" }
    ]
  },
  {
    id: 4,
    title: "Communication Protocol Support",
    rows: [
      { 
        label: "Industrial Protocols", 
        value: "Not Supported" 
      },
      { 
        label: "IP & Application Protocols", 
        value: "1. TCP/IP<br>2. HTTP/HTTPS<br>3. MQTT / MQTTs<br>4. FTP" 
      }
    ]
  },
  {
    id: 5,
    title: "Physical Specifications",
    rows: [
      { label: "Dimensions (L × W × H)", value: "70 × 100 × 60 mm" },
      { label: "Installation", value: "DIN Rail Mount" }
    ]
  },
  {
    id: 6,
    title: "Operating Environment",
    rows: [
      { label: "Operating Temperature", value: "−40 °C to +85 °C" },
      { label: "Operating Humidity", value: "Up to 85% RH" },
      { label: "Vibration Resistance", value: "2 g, 10–150 Hz" },
      { label: "Enclosure Protection", value: "IP20 (Indoor)" }
    ]
  }
],
    
  },
   {
    id: 9,
    category: "gateways",
    name: "Modbus RTU to TCP Gateway (TSGWMB0003)",
    description:
      "Ethernet MODBUS RTU/IO module with cloud connectivity and PLC-like logic for industrial automation.",
    price: "N/A",
    heroBgImage: "assets/Desktop_1440 x 626 px_MODBUS_RTU_TCP_GATEWAY.jpg",
    image: "assets/Media/device/products/MODBUS_RTU_TCP_GATEWAY.jpg",
    communication: [
      "Modbus-Tcp",
      "modbus-gateway",
      "modbus-tcp",
      "mqtts",
      "https",
      "http",
      "ftp",
      "tcp",
      "udp",
      "dns",
      "dhcp",
    ],
technicalSpecs: [
  {
    id: 1,
    title: "Power Supply Specifications",
    rows: [
      { label: "Supply Voltage", value: "12–24 V DC" },
      { label: "Reverse Polarity Protection", value: "0–24 V DC" },
      { label: "Max Operating Current", value: "< 100 mA" },
      { label: "Peak Operating Current", value: "2 A @ network activities" }
    ]
  },
  {
    id: 2, 
    title: "Communication Features",
    rows: [
      { label: "GSM/GPRS", value: "4G LTE-FDD (B1 / B3 / B5 / B7 / B8 / B20), LTE-TDD (B38 / B40 / B41), WCDMA (B1 / B5 / B8), 2G GSM (900 / 1800 MHz)" },
      { label: "WIFI", value: "NA" },
      { label: "GNSS (Positioning)", value: "NA" }
    ]
  },
  {
    id: 3,
    title: "Interfaces / IO Capabilities", 
    rows: [
      { label: "RS-485", value: "1" },
      { label: "Ethernet", value: "0" },
      { label: "GNSS Antenna", value: "External (if required)" },
      { label: "Cellular Antenna", value: "External" },
      { label: "SIM Type", value: "Micro SIM" },
      { label: "Flash Memory", value: "64 MB" },
      { label: "RAM Memory", value: "512 KB" },
      { label: "Real Time Clock", value: "External with battery backup" },
      { label: "Watchdog", value: "External" },
      { label: "LED Indication", value: "Available" },
      { label: "Serial Port", value: "USB Mini" }
    ]
  },
  {
    id: 4,
    title: "Communication Protocol Support",
    rows: [
      { 
        label: "Industrial Protocols", 
        value: "1. Transparent Modbus RTU<br>2. Modbus RTU Polling<br>3. Modbus RTU over TCP<br>4. Modbus RTU (Slave Mode)" 
      },
      { 
        label: "IP & Application Protocols", 
        value: "1. TCP/IP<br>2. HTTP/HTTPS<br>3. MQTT / MQTTs<br>4. FTP" 
      }
    ]
  },
  {
    id: 5,
    title: "Physical Specifications",
    rows: [
      { label: "Dimensions (L × W × H)", value: "70 × 100 × 60 mm" },
      { label: "Installation", value: "DIN Rail Mount" }
    ]
  },
  {
    id: 6,
    title: "Operating Environment",
    rows: [
      { label: "Operating Temperature", value: "−40 °C to +85 °C" },
      { label: "Operating Humidity", value: "Up to 85% RH" },
      { label: "Vibration Resistance", value: "2 g, 10–150 Hz" },
      { label: "Enclosure Protection", value: "IP20 (Indoor)" }
    ]
  }
]
,
    cloudFeatures: [
      "Device Management: Add/remove devices, geolocation, health status",
      "Live Data Monitoring: Centralized dashboard with real-time tracking",
      "Graphical Representation: Multi-format trend charts",
      "Historical Data & Reporting: Customizable WYSIWYG reports",
      "Alert Management: Conditional rules with SMS/email notifications",
      "Audit Logging: Historical alert logs for compliance",
      "User Management: Role-based multi-tier access control",
    ],
    additionalFeatures: [
      "Advanced interlocking logic reduces PLC dependency",
      "Dual analog output support for actuator control",
      "Ethernet-based RTU for panel and PLC integration",
      "Compact DIN-rail design for industrial cabinets",
      "Multiple configuration methods",
      "Industrial-grade reliability",
      "Wide operating temperature range",
      "Optional extended storage for data logging",
    ],
    customizationOptions: [
      "Protocol customization",
      "I/O configuration",
      "Enclosure modifications",
      "Custom firmware development",
      "Cloud platform integration",
    ],
  },
  {
    id: 10,
    category: "sensors",
    name: "MODBUS LORAWAN NODE (TSNODE0002)",
    description:
      "Low-power MODBUS RTU gateway for LoRaWAN-based industrial sensor networks with cloud connectivity and remote monitoring.",
    price: "N/A",
    heroBgImage: "assets/Desktop_1440 x 626 px_MODBUS_LORAWAN_NODE.jpg",
    image: "assets/Media/device/products/MODBUS_LORAWAN_NODE.jpg",
    communication: [
      "Modbus-Tcp",
      "modbus-gateway",
      "modbus-tcp",
      "mqtts",
      "https",
      "http",
      "ftp",
      "tcp",
      "udp",
      "dns",
      "dhcp",
    ],
technicalSpecs: [
  {
    id: 1,
    title: "Power Supply Specifications",
    rows: [
      { label: "Supply Voltage", value: "7.2 V DC" },
      { label: "Reverse Polarity Protection", value: "7.2 V DC" },
      { label: "Max Operating Current", value: "< 100 mA" },
      { label: "Peak Operating Current", value: "2 A @ network activities" }
    ]
  },
  {
    id: 2, 
    title: "Communication Features",
    rows: [
      { label: "GSM/GPRS", value: "4G LTE-FDD (B1 / B3 / B5 / B7 / B8 / B20), LTE-TDD (B38 / B40 / B41), WCDMA (B1 / B5 / B8), 2G GSM (900 / 1800 MHz)" },
      { label: "WIFI", value: "NA" },
      { label: "Wireless Frequency Band & Communication", value: "Accuracy Rate: LoRaWAN ≥ 95%" },
      { label: "LoRaWAN Band", value: "ISM Band 865–867 MHz" },
      { label: "Radio Communication Distance", value: "Minimum 1 km radius" }
    ]
  },
  {
    id: 3,
    title: "Interfaces / IO Capabilities", 
    rows: [
      { label: "RS-485", value: "1" },
      { label: "GNSS Antenna", value: "External (If required)" },
      { label: "Cellular Antenna", value: "External" },
      { label: "SIM Type", value: "Micro SIM" },
      { label: "Flash Memory", value: "64 MB" },
      { label: "RAM Memory", value: "512 KB" },
      { label: "Real Time Clock", value: "External with battery backup" },
      { label: "Watchdog", value: "External" },
      { label: "LED Indication", value: "Available" },
      { label: "Serial Port", value: "USB Mini" }
    ]
  },
  {
    id: 4,
    title: "Communication Protocol Support",
    rows: [
      { 
        label: "Industrial Protocols", 
        value: "1. Transparent Modbus RTU<br>2. Modbus RTU Polling<br>3. Modbus RTU over TCP<br>4. Modbus RTU (Slave Mode)" 
      },
      { 
        label: "IP & Application Protocols", 
        value: "1. TCP/IP<br>2. HTTP/HTTPS<br>3. MQTT / MQTTs<br>4. FTP" 
      }
    ]
  },
  {
    id: 5,
    title: "Physical Specifications",
    rows: [
      { label: "Dimensions (L × W × H)", value: "197 × 90 × 60 mm" },
      { label: "Installation", value: "DIN Rail Mount" }
    ]
  },
  {
    id: 6,
    title: "Operating Environment",
    rows: [
      { label: "Operating Temperature", value: "−40 °C to +85 °C" },
      { label: "Operating Humidity", value: "Up to 85% RH" },
      { label: "Vibration Resistance", value: "2 g, 10–150 Hz" },
      { label: "Enclosure Protection", value: "IP20 (Indoor)" }
    ]
  }
]

,
    cloudFeatures: [
      "Device Management: Add/remove devices, geolocation, health status",
      "Live Data Monitoring: Centralized dashboard with real-time tracking",
      "Graphical Representation: Multi-format trend charts",
      "Historical Data & Reporting: Customizable WYSIWYG reports",
      "Alert Management: Conditional rules with SMS/email notifications",
      "Audit Logging: Historical alert logs for compliance",
      "User Management: Role-based multi-tier access control",
    ],
    additionalFeatures: [
      "Advanced interlocking logic reduces PLC dependency",
      "Dual analog output support for actuator control",
      "Ethernet-based RTU for panel and PLC integration",
      "Compact DIN-rail design for industrial cabinets",
      "Multiple configuration methods",
      "Industrial-grade reliability",
      "Wide operating temperature range",
      "Optional extended storage for data logging",
    ],
    customizationOptions: [
      "Protocol customization",
      "I/O configuration",
      "Enclosure modifications",
      "Custom firmware development",
      "Cloud platform integration",
    ],
  },
  {
    id: 11,
    category: "io-modules",
    name: "8 CHANNEL IO Card (TSIOC001)",
    description:
      "8-channel industrial I/O module with MODBUS RTU communication for sensor and actuator control in industrial automation.",
    price: "N/A",
    heroBgImage: "assets/Desktop_1440 x 626 px_8AI_DI.jpg",
    image: "assets/Media/device/products/8AI_DI.jpg",
    communication: [
      "Modbus-Tcp",
      "modbus-gateway",
      "modbus-tcp",
      "mqtts",
      "https",
      "http",
      "ftp",
      "tcp",
      "udp",
      "dns",
      "dhcp",
    ],
    technicalSpecs: [
  {
    id: 1,
    title: "Power Supply Specifications",
    rows: [
      { label: "Supply Voltage", value: "12–24 V DC" },
      { label: "Reverse Polarity Protection", value: "0–24 V DC" },
      { label: "Max Operating Current", value: "< 100 mA" },
      { label: "Peak Operating Current", value: "2 A @ network activities" }
    ]
  },
  {
    id: 2, 
    title: "Communication Features",
    rows: [
      { label: "GSM/GPRS", value: "NA" },
      { label: "WIFI", value: "NA" }
    ]
  },
  {
    id: 3,
    title: "Interfaces / IO Capabilities", 
    rows: [
      { label: "Digital Input", value: "8" },
      { label: "Analog Input", value: "8" },
      { label: "RS-485", value: "1" },
      { label: "Memory", value: "512kb" },
      { label: "Real Time Clock", value: "External with battery backup" },
      { label: "Watchdog", value: "External" },
      { label: "LED Indication", value: "Available" },
      { label: "Serial Port", value: "USB Mini" }
    ]
  },
  {
    id: 4,
    title: "Communication Protocol Support",
    rows: [
      { 
        label: "Industrial Protocols", 
        value: "Not Supported" 
      }
    ]
  },
  {
    id: 5,
    title: "Physical Specifications",
    rows: [
      { label: "Dimensions (L × W × H)", value: "120 × 80 × 30 mm" },
      { label: "Installation", value: "DIN Rail Mount" }
    ]
  },
  {
    id: 6,
    title: "Operating Environment",
    rows: [
      { label: "Operating Temperature", value: "−10 °C to +70 °C" },
      { label: "Operating Humidity", value: "Up to 85% RH" },
      { label: "Vibration Resistance", value: "2 g, 10–150 Hz" },
      { label: "Enclosure Protection", value: "IP65" }
    ]
  }
]


,
    cloudFeatures: [
      "Device Management: Add/remove devices, geolocation, health status",
      "Live Data Monitoring: Centralized dashboard with real-time tracking",
      "Graphical Representation: Multi-format trend charts",
      "Historical Data & Reporting: Customizable WYSIWYG reports",
      "Alert Management: Conditional rules with SMS/email notifications",
      "Audit Logging: Historical alert logs for compliance",
      "User Management: Role-based multi-tier access control",
    ],
    additionalFeatures: [
      "Advanced interlocking logic reduces PLC dependency",
      "Dual analog output support for actuator control",
      "Ethernet-based RTU for panel and PLC integration",
      "Compact DIN-rail design for industrial cabinets",
      "Multiple configuration methods",
      "Industrial-grade reliability",
      "Wide operating temperature range",
      "Optional extended storage for data logging",
    ],
    customizationOptions: [
      "Protocol customization",
      "I/O configuration",
      "Enclosure modifications",
      "Custom firmware development",
      "Cloud platform integration",
    ],
  },
  {
    id: 12,
    category: "controllers",
    name: "SINGLE PHASE ENERGY MONITORING RTU (TSRTU0002)",
    description:
      "Single phase energy monitoring device with MODBUS RTU communication for power consumption tracking in industrial environments.",
    price: "N/A",
    heroBgImage: "assets/Desktop_1440 x 626 px_SINGLE_PHASE_ENERGYMONITORING.jpg",
    image: "assets/Media/device/products/SINGLE_PHASE_ENERGYMONITORING.jpg",
    communication: [
      "Modbus-Tcp",
      "modbus-gateway",
      "modbus-tcp",
      "mqtts",
      "https",
      "http",
      "ftp",
      "tcp",
      "udp",
      "dns",
      "dhcp",
    ],
    technicalSpecs: [
  {
    id: 1,
    title: "Power Supply Specifications",
    rows: [
      { label: "Supply Voltage", value: "12–24 V DC" },
      { label: "Reverse Polarity Protection", value: "0–24 V DC" },
      { label: "Max Operating Current", value: "< 100 mA" },
      { label: "Peak Operating Current", value: "2 A @ network activities" }
    ]
  },
  {
    id: 2, 
    title: "Communication Features",
    rows: [
      { label: "GSM/GPRS", value: "4G LTE-FDD (B1 / B3 / B5 / B7 / B8 / B20), LTE-TDD (B38 / B40 / B41), WCDMA (B1 / B5 / B8), 2G GSM (900 / 1800 MHz)" },
      { label: "WIFI", value: "IEEE 802.11 Wireless Network" }
    ]
  },
  {
    id: 3,
    title: "Interfaces / IO Capabilities", 
    rows: [
      { label: "Digital Input", value: "0" },
      { label: "Digital Output", value: "0" },
      { label: "Analog Input", value: "0" },
      { label: "Analog Output", value: "1" },
      { label: "RS-485", value: "0" },
      { label: "Counter Input", value: "0" },
      { label: "Ethernet", value: "0" },
      { label: "GNSS Antenna", value: "External" },
      { label: "Cellular Antenna", value: "External" },
      { label: "SIM Type", value: "Micro SIM" },
      { label: "Flash Memory", value: "64 MB" },
      { label: "RAM Memory", value: "512 KB" },
      { label: "Real Time Clock", value: "External with battery backup" },
      { label: "Watchdog", value: "External" },
      { label: "LED Indication", value: "Available" },
      { label: "Serial Port", value: "USB Mini" },
      { label: "Display", value: "Not Available" }
    ]
  },
  {
    id: 4,
    title: "Communication Protocol Support",
    rows: [
      { 
        label: "Industrial Protocols", 
        value: "1. Transparent Modbus RTU<br>2. Modbus RTU Polling<br>3. Modbus RTU over TCP<br>4. Modbus RTU (Slave Mode)" 
      },
      { 
        label: "IP & Application Protocols", 
        value: "1. TCP/IP<br>2. HTTP/HTTPS<br>3. MQTT / MQTTs<br>4. FTP" 
      }
    ]
  },
  {
    id: 5,
    title: "Physical Specifications",
    rows: [
      { label: "Dimensions (L × W × H)", value: "70 × 100 × 60 mm" },
      { label: "Installation", value: "DIN Rail Mount" }
    ]
  },
  {
    id: 6,
    title: "Operating Environment",
    rows: [
      { label: "Operating Temperature", value: "−40 °C to +85 °C" },
      { label: "Operating Humidity", value: "Up to 85% RH" },
      { label: "Vibration Resistance", value: "2 g, 10–150 Hz" },
      { label: "Enclosure Protection", value: "IP65" }
    ]
  }
]


,
    cloudFeatures: [
      "Device Management: Add/remove devices, geolocation, health status",
      "Live Data Monitoring: Centralized dashboard with real-time tracking",
      "Graphical Representation: Multi-format trend charts",
      "Historical Data & Reporting: Customizable WYSIWYG reports",
      "Alert Management: Conditional rules with SMS/email notifications",
      "Audit Logging: Historical alert logs for compliance",
      "User Management: Role-based multi-tier access control",
    ],
    additionalFeatures: [
      "Advanced interlocking logic reduces PLC dependency",
      "Dual analog output support for actuator control",
      "Ethernet-based RTU for panel and PLC integration",
      "Compact DIN-rail design for industrial cabinets",
      "Multiple configuration methods",
      "Industrial-grade reliability",
      "Wide operating temperature range",
      "Optional extended storage for data logging",
    ],
    customizationOptions: [
      "Protocol customization",
      "I/O configuration",
      "Enclosure modifications",
      "Custom firmware development",
      "Cloud platform integration",
    ],
  },
    {
       id: 13,
    category: "controllers",
    name: "WEATHER STATION RTU (TSRTU0005)",
    description:
      "Comprehensive weather monitoring solution with multiple sensors for temperature, humidity, pressure, and more.",
    price: "N/A",
    heroBgImage: "assets/Desktop_1440 x 626 px_Weather Station.jpg",
    image: "assets/Media/device/products/Weather Station.jpg",
    communication: [
      "Modbus-Tcp",
      "modbus-gateway",
      "modbus-tcp",
      "mqtts",
      "https",
      "http",
      "ftp",
      "tcp",
      "udp",
      "dns",
      "dhcp",
    ],
       technicalSpecs: [
  {
    id: 1,
    title: "Power Supply Specifications",
    rows: [
      { label: "Supply Voltage", value: "12–24 V DC" },
      { label: "Reverse Polarity Protection", value: "0–24 V DC" },
      { label: "Max Operating Current", value: "< 100 mA" },
      { label: "Peak Operating Current", value: "2 A @ network activities" }
    ]
  },
  {
    id: 2, 
    title: "Communication Features",
    rows: [
      { label: "GSM/GPRS", value: "4G LTE-FDD (B1 / B3 / B5 / B7 / B8 / B20), LTE-TDD (B38 / B40 / B41), WCDMA (B1 / B5 / B8), 2G GSM (900 / 1800 MHz)" },
      { label: "WIFI", value: "NA" }
    ]
  },
  {
    id: 3,
    title: "Interfaces / IO Capabilities", 
    rows: [
      { label: "Digital Input", value: "3" },
      { label: "Digital Output", value: "0" },
      { label: "Analog Input", value: "6" },
      { label: "Analog Output", value: "0" },
      { label: "RS-485", value: "1" },
      { label: "Counter Input", value: "0" },
      { label: "Ethernet", value: "0" },
      { label: "GNSS Antenna", value: "External" },
      { label: "Cellular Antenna", value: "External" },
      { label: "SIM Type", value: "Micro SIM" },
      { label: "Flash Memory", value: "64 MB" },
      { label: "RAM Memory", value: "512 KB" },
      { label: "Real Time Clock", value: "External with battery backup" },
      { label: "Watchdog", value: "External" },
      { label: "LED Indication", value: "Available" },
      { label: "Serial Port", value: "USB Mini" },
      { label: "Display", value: "16X2 LCD" }
    ]
  },
  {
    id: 4,
    title: "Communication Protocol Support",
    rows: [
      { 
        label: "Industrial Protocols", 
        value: "1. Transparent Modbus RTU<br>2. Modbus RTU Polling<br>3. Modbus RTU over TCP<br>4. Modbus RTU (Slave Mode)" 
      },
      { 
        label: "IP & Application Protocols", 
        value: "1. TCP/IP<br>2. HTTP/HTTPS<br>3. MQTT / MQTTs<br>4. FTP" 
      }
    ]
  },
  {
    id: 5,
    title: "Physical Specifications",
    rows: [
      { label: "Dimensions (L × W × H)", value: "130 × 100 × 60 mm" },
      { label: "Installation", value: "DIN Rail Mount" }
    ]
  },
  {
    id: 6,
    title: "Operating Environment",
    rows: [
      { label: "Operating Temperature", value: "−40 °C to +85 °C" },
      { label: "Operating Humidity", value: "Up to 85% RH" },
      { label: "Vibration Resistance", value: "2 g, 10–150 Hz" },
      { label: "Enclosure Protection", value: "IP20 (Indoor)" }
    ]
  }
]


    } 
  
];
// SVG Icons for different product categories
const categoryIcons = {
  gateways:
    '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',
  dataloggers:
    '<path d="M2 20h20M5 20V4h14v16M9 4v16M15 4v16M9 8h.01M15 8h.01M9 12h.01M15 12h.01M9 16h.01M15 16h.01"></path>',
  controllers:
    '<rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>',
  sensors:
    '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle>',
  "io-modules":
    '<rect x="2" y="6" width="20" height="12" rx="2"></rect><circle cx="7" cy="12" r="2"></circle><circle cx="12" cy="12" r="2"></circle><circle cx="17" cy="12" r="2"></circle>',
  power:
    '<path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line>',
};

// Category display names
const categoryNames = {
  all: "All Products",
  gateways: "Gateways",
  dataloggers: "Dataloggers",
  controllers: "Controllers / RTUs",
  sensors: "Sensor Nodes",
  "io-modules": "I/O Modules",
  power: "Power & Accessories",
};

// State management
let currentCategory = "all";
let activeFilters = {
  communication: [],
  power: [],
  io: [],
  application: [],
};

// Initialize the page
document.addEventListener("DOMContentLoaded", function () {
  renderProducts();
  setupEventListeners();
});

// Setup event listeners
function setupEventListeners() {
  // Navigation items
  const navItems = document.querySelectorAll(".nav-item");
  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      navItems.forEach((nav) => nav.classList.remove("active"));
      this.classList.add("active");
      currentCategory = this.dataset.category;
      renderProducts();
    });
  });

  // Filter checkboxes
  const filterCheckboxes = document.querySelectorAll(".filter-checkbox input");
  filterCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      const filterType = this.dataset.filter;
      const filterValue = this.value;

      if (this.checked) {
        if (!activeFilters[filterType].includes(filterValue)) {
          activeFilters[filterType].push(filterValue);
        }
      } else {
        activeFilters[filterType] = activeFilters[filterType].filter(
          (v) => v !== filterValue
        );
      }

      renderProducts();
    });
  });

  // Clear filters button
  const clearButton = document.querySelector(".clear-filters");
  clearButton.addEventListener("click", function () {
    activeFilters = {
      communication: [],
      power: [],
      io: [],
      application: [],
    };

    const checkboxes = document.querySelectorAll(".filter-checkbox input");
    checkboxes.forEach((cb) => (cb.checked = false));

    renderProducts();
  });
}

// Filter products based on category and active filters
function filterProducts() {
  let filtered = products;

  // Filter by category
  if (currentCategory !== "all") {
    filtered = filtered.filter((p) => p.category === currentCategory);
  }

  // Filter by communication
  if (activeFilters.communication.length > 0) {
    filtered = filtered.filter((p) =>
      activeFilters.communication.some((f) => p.communication.includes(f))
    );
  }

  // Filter by power
  if (activeFilters.power.length > 0) {
    filtered = filtered.filter((p) =>
      activeFilters.power.some((f) => p.power.includes(f))
    );
  }

  // Filter by I/O
  if (activeFilters.io.length > 0) {
    filtered = filtered.filter((p) =>
      activeFilters.io.some((f) => p.io.includes(f))
    );
  }

  // Filter by application
  if (activeFilters.application.length > 0) {
    filtered = filtered.filter((p) =>
      activeFilters.application.some((f) => p.application.includes(f))
    );
  }

  return filtered;
}

// Render products to the grid
function renderProducts() {
  const productsGrid = document.getElementById("products-grid");
  const productsTitle = document.querySelector(".products-title");
  const productCount = document.getElementById("product-count");

  const filtered = filterProducts();

  // Update title and count
  productsTitle.textContent = categoryNames[currentCategory];
  productCount.textContent = filtered.length;

  // Clear grid
  productsGrid.innerHTML = "";

  if (filtered.length === 0) {
    productsGrid.innerHTML = `
            <div class="no-results">
                <svg class="no-results-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    <line x1="8" y1="11" x2="14" y2="11"></line>
                </svg>
                <h2>No products found</h2>
                <p>Try adjusting your filters to see more results</p>
            </div>
        `;
    return;
  }

  // Render each product
  filtered.forEach((product) => {
    const productCard = createProductCard(product);
    productsGrid.appendChild(productCard);
  });
}

// Create a product card element
function createProductCard(product) {
  const card = document.createElement("div");
  card.className = "product-card";

  const icon = categoryIcons[product.category] || categoryIcons["sensors"];

  // Generate tags HTML
  const tags = [];

  // Add communication tags if they exist
  const commTags = (product.communication || []).filter(Boolean);
  if (commTags.length > 0) {
    tags.push(
      ...commTags
        .slice(0, 2)
        .map(
          (tag) =>
            `<span class="product-tag tag-communication">${tag
              .replace(/-/g, " ")
              .toUpperCase()}</span>`
        )
    );
  }

  // Add feature tags if they exist
  const designFeatures = product.features?.design || [];
  if (designFeatures.some((d) => d && d.includes("DIN-rail"))) {
    tags.push('<span class="product-tag tag-feature">DIN-RAIL</span>');
  }

  // Add application tags if they exist (max 1)
  const appTags = (product.application || []).filter(Boolean).slice(0, 1);
  if (appTags.length > 0) {
    tags.push(
      `<span class="product-tag tag-application">${appTags[0]
        .replace(/-/g, " ")
        .toUpperCase()}</span>`
    );
  }

  const tagsHTML =
    tags.length > 0
      ? `
        <div class="product-tags">
            ${tags.join("")}
        </div>`
      : "";

  card.innerHTML = `
        <div class="product-image">
            ${
              product.image
                ? `<img src="${product.image}" alt="${product.name}" class="product-preview">`
                : `<svg class="product-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    ${icon}
                  </svg>`
            }
        </div>
        <div class="product-info">
            <div class="product-category">${
              categoryNames[product.category]
            }</div>
            <h3 class="product-name">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            ${tagsHTML}
            <div class="product-footer">
                <a href="product-details.html?id=${
                  product.id
                }" class="product-link" data-product-id="${product.id}">
                    Learn More
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </a>
            </div>
        </div>
    `;

  // Add click handler to the card
  card.addEventListener("click", (e) => {
    // Don't navigate if the click was on the link itself (to avoid double navigation)
    if (!e.target.closest("a")) {
      window.location.href = `product-details.html?id=${product.id}`;
    }
  });

  return card;
}
