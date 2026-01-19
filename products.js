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
   overview: "This device is a compact and reliable IoT gateway/controller built around the ESP32, offering  An onboard Real-Time Clock (RTC) ensures accurate timekeeping for data logging, event tracking, and time-based control operations. For non-volatile storage, the device incorporates both Flash memory and EEPROM, allowing secure retention of configuration parameters, calibration data, logs, and system settings even during power interruptions.high-performance wireless connectivity through its integrated Wi-Fi interface. It supports Modbus RTU (RS485), enabling seamless integration with energy meters, sensors, and a wide range of industrial equipment. The gateway is suitable for remote monitoring, data transmission, and cloud connectivity in industrial and IoT applications where reliable communication is critical.",
    brochurePath: "assets/brochures/Techavo_Brochure_WiFi_Modbus_Gateway.pdf",
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
    name: "4G ETH GATEWAY (TSGTW1002)",
    brochurePath:"assets/brochures/4G Ethernet Gateway white.pdf",
    overview: "4G ETH GATEWAY (TSGTW1002) is a compact and reliable industrial IoT gateway designed to provide robust and flexible connectivity. The device supports 4G LTE cellular communication as well as Ethernet, ensuring dependable network access in both wired and wireless environments. An onboard Real-Time Clock (RTC) ensures accurate timekeeping for data logging, event tracking, and time-based operations. For non-volatile storage, the gateway integrates Flash memory and EEPROM, enabling secure storage of configuration parameters, device settings, and logs even during power interruptions. The gateway is suitable for remote monitoring, data transmission, and cloud connectivity in industrial and IoT applications where reliable communication is critical.",
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
          {
            label: "GSM/GPRS",
            value:
              "4G LTE/FDD (B1, B3, B5, B7, B8, B20)<br>LTE/TDD (B38 / B40/ B41)<br>WCDMA (B1 / B5 / B8)<br>2G GSM (900 / 1800 MHz)",
          }, // TSGWET0001
          { label: "WIFI", value: "NA" }, // TSGWET0001
          { label: "GNSS Positioning", value: "NA" }, // TSGWET0001
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
    overview: "LORAWAN Sensor Node (TSNODE0001) is an ultra-low-power wireless sensor node designed for long-range and battery-operated IoT applications. The device supports both LoRaWAN and Wi-Fi connectivity, providing flexible communication options for different deployment scenarios.It includes provisions for analog input measurement, allowing easy interfacing with a wide range of sensors. Additionally, the node features electrically isolated pulse interrupt inputs, ensuring reliable and noise-immune pulse counting and event detection from external devices such as flow meters and switches.Designed for high energy efficiency and extended battery life, the node is well suited for remote sensing, data acquisition, and monitoring applications in industrial, utility, and environmental IoT systems",
    name: "LORAWAN Sensor Node (TSNODE0001)",
    brochurePath:"assets/brochures/LORAWAN SENSOR NODE.pdf",
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
    overview: "4G MODBUS IO RTU (TSRTU6660) is an industrial-grade remote I/O RTU designed for reliable field data acquisition and control. The device features 4G LTE cellular connectivity for remote monitoring and communication over wide-area networks. It provides 6 Analog Inputs (AI) supporting 4–20 mA current signals, suitable for industrial sensors and transmitters. The unit also includes 6 Digital Inputs (DI) and 6 Digital Outputs (DO). The digital outputs are relay-type, supporting both dry contact and wet contact operation for flexible control of external loads. The RTU supports electrically isolated Modbus RTU communication, ensuring robust, noise-immune data exchange in harsh industrial environments. Designed for dependable operation, the device is ideal for remote I/O expansion, automation, and telemetry applications in industrial and utility systems.",
    brochurePath: "assets/brochures/TSRTU6660.pdf",
    description:
      "Versatile industrial RTU with 4G, LoRa, WiFi, BLE, and Zigbee support for comprehensive IoT connectivity.",
    price: "N/A",
    heroBgImage: "assets/Desktop_1440 x 626 px_6CH_RTU.jpg",
    image: "assets/Media/device/products/Desktop_1440 x 626 px_6CH_RTU.jpg",
    communication: [
      "rtu",
      "4g",
      "lte",
      "modbus-rtu",
      "modbus-tcp",
      "mqtts",
      "https",
      "ftp",
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
    name: "4G MODBUS RTU (TSRTU3331)",
    brochurePath: "assets/brochures/TSRTU3331.pdf",
    overview: "4G MODBUS RTU (TSRTU3331) is an industrial remote terminal unit designed for reliable monitoring and control applications. The device features 4G LTE cellular connectivity for secure and wide-area communication. It provides 3 Analog Input (AI) channels supporting 4–20 mA current signals, enabling accurate acquisition of data from industrial sensors and transmitters. The unit also includes Digital Inputs (DI) and Digital Outputs (DO), with relay-type digital outputs supporting both dry and wet contact operation for flexible field control. The RTU supports electrically isolated Modbus RTU communication, ensuring stable and noise-immune operation in electrically harsh industrial environments. This device is well suited for compact remote monitoring, automation, and telemetry applications.",
    description:
      "Industrial RTU with 4G, LoRa, and WiFi for reliable data collection and cloud connectivity.",
    price: "N/A",
    heroBgImage: "assets/Desktop_1440 x 626 px_3CHRTU.jpg",
    image: "assets/Media/device/products/4GMODBUS_RTU.jpg",
    communication: [
      "rtu",
      "modbus-rtu",
      "4g",
      "lte",
      "modbus-tcp",
      "mqtts",
      "https",
      "ftp",  
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
    overview: "4G MODBUS IO MINI RTU (TSRTU2200) is a compact industrial remote I/O RTU designed for space-constrained and remote monitoring applications. The device features 4G LTE cellular connectivity for reliable wide-area communication. It provides 2 Analog Input (AI) channels supporting 4–20 mA current signals for industrial sensor interfacing. The unit includes 2 Digital Inputs (DI) supporting both dry and wet contact operation, along with one pulse interrupt input for accurate pulse counting from devices such as flow meters or energy meters. The RTU supports Modbus communication, enabling seamless integration with SCADA systems, PLCs, and other industrial controllers. With its compact design and industrial-grade features, the TSRTU2200 is ideal for lightweight automation, telemetry, and remote data acquisition applications.",
    brochurePath: "assets/brochures/TSRTU62200.pdf",
    description:
      "Compact RTU with 4G and multi-radio support for industrial IoT data collection and transmission.",
    price: "N/A",
    heroBgImage: "assets/Desktop_1440 x 626 px_V10_4G.jpg",
    image: "assets/Media/device/products/MINI_RTU.jpg",
    communication: [
      "modbus-rtu",
      "4g",
      "lte",
      "wifi",
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
    name: "MINI ETHERNET 4CH IO Card (TSETH6442)",
    overview: "MINI ETHERNET 4CH IO Card (TSETH6442) is a compact industrial Ethernet I/O card designed for reliable data acquisition and control in automation systems. The device supports Modbus over Ethernet, enabling seamless integration with PLCs, SCADA systems, and industrial networks. It features 10 Digital Inputs (DI), 4 Analog Inputs (AI), and 4 Digital Outputs (DO) for flexible field interfacing. Additionally, the card provides 2 Analog Output channels supporting 4–20 mA current signals, suitable for precise control of industrial actuators and transmitters. The device includes an onboard Real-Time Clock (RTC) for accurate timekeeping, along with external memory and Flash memory for secure storage of configuration data, logs, and system parameters. With its compact form factor and industrial-grade design, the TSETH6442 is ideal for distributed I/O, machine control, and industrial Ethernet applications.",
    brochurePath: "assets/brochures/Mini Ethernet IO Card white.pdf",
    description:
      "Ethernet MODBUS RTU/IO module with cloud connectivity and PLC-like logic for industrial automation.",
    price: "N/A",
    heroBgImage: "assets/Desktop_1440 x 626 px_4G_MODBUS_IO_RTU.jpg",
    image: "assets/Media/device/products/4CH_IOCARD_V2.jpg",
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
    overview:"4G MODBUS GATEWAY v1 (TSGTW1003) is a robust industrial communication gateway designed for reliable remote data acquisition and transmission. The device features 4G LTE cellular connectivity for wide-area communication and supports the Modbus protocol for seamless integration with meters, sensors, and industrial equipment. The gateway includes external memory and onboard Flash storage for secure buffering and retention of data during network or power loss, ensuring no data loss in critical applications. An integrated Real-Time Clock (RTC) provides accurate time stamping for logged data and event records. Designed for industrial environments, the TSGTW1003 is ideal for remote monitoring, telemetry, and cloud-connected automation systems.",
    brochurePath: "",
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
              "4G LTE-FDD (B1 / B3 / B5 / B7 / B8 / B20), <br> LTE-TDD (B38 / B40 / B41), <br> WCDMA (B1 / B5 / B8), <br> 2G GSM (900 / 1800 MHz)",
          },
          { label: "WIFI", value: "NA" },
          { label: "GNSS (Positioning)", value: "NA" },
        ],
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
          { label: "Serial Port", value: "USB Mini" },
        ],
      },
      {
        id: 4,
        title: "Communication Protocol Support",
        rows: [
          {
            label: "Industrial Protocols",
            value: "Not Supported",
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
  },
  {
    id: 9,
    category: "gateways",
    name: "Modbus RTU to TCP Gateway (TSGWMB0003)",
    overview: "Modbus RTU to TCP Gateway (TSGWMB0003) is designed to seamlessly bridge serial Modbus RTU devices with Ethernet-based Modbus TCP networks. It features electrically isolated Modbus communication, ensuring safe and reliable operation in electrically noisy industrial environments. The gateway allows existing RS485-based meters, sensors, and controllers to be easily integrated into modern Ethernet and IP-based systems. With a built-in RTC, the device ensures accurate time-stamped data handling, while EEPROM and Flash memory securely store configuration parameters, logs, and system settings even during power interruptions. Compact, robust, and easy to deploy, the TSGWMB0003 is ideal for industrial automation, energy monitoring, building management systems, and SCADA applications where reliable Modbus connectivity is essential.",
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
              "4G LTE-FDD (B1 / B3 / B5 / B7 / B8 / B20), <br> LTE-TDD (B38 / B40 / B41), <br> WCDMA (B1 / B5 / B8), <br>  2G GSM (900 / 1800 MHz)",
          },
          { label: "WIFI", value: "NA" },
          { label: "GNSS (Positioning)", value: "NA" },
        ],
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
    overview: "MODBUS LoRaWAN Node (TSNODE0002) is a low-power, battery-operated industrial node designed for long-range wireless communication using LoRaWAN. The device supports Modbus connectivity, enabling seamless integration of Modbus-based sensors and meters into LoRaWAN networks. Optimized for ultra-low power operation, the node is ideal for battery-powered deployments with long service life requirements. An onboard Real-Time Clock (RTC) provides accurate time stamping, while EEPROM ensures reliable non-volatile storage of configuration parameters and device settings. The compact and energy-efficient design makes the TSNODE0002 suitable for remote monitoring, data acquisition, and industrial IoT applications in challenging and power-constrained environments.",
    description:
      "Low-power MODBUS RTU gateway for LoRaWAN-based industrial sensor networks with cloud connectivity and remote monitoring.",
    price: "N/A",
    heroBgImage: "assets/Desktop_1440 x 626 px_MODBUS_LORAWAN_NODE.jpg",
    image: "assets/Media/device/products/MODBUS_LORAWAN_NODE.jpg",
    communication: [
      "lora",
      "lorawan",
      "modbus-node",
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
          { label: "RS-485", value: "1" },
          { label: "GNSS Antenna", value: "External (If required)" },
          { label: "Cellular Antenna", value: "External" },
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
          { label: "Dimensions (L × W × H)", value: "197 × 90 × 60 mm" },
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
    overview: "8 CHANNEL IO Card (TSIOC001) is an industrial I/O expansion card designed for reliable data acquisition and monitoring applications. The device provides 8 Digital Input (DI) channels supporting both dry and wet contact operation, enabling flexible interfacing with field devices. It also features 8 Analog Input (AI) channels supporting 4–20 mA current signals, suitable for industrial sensors and transmitters. The card supports Modbus communication, allowing seamless integration with PLCs, RTUs, and SCADA systems. With its compact and robust design, the TSIOC001 is ideal for industrial automation, process monitoring, and distributed I/O applications.",
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
          { label: "WIFI", value: "NA" },
        ],
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
          { label: "Serial Port", value: "USB Mini" },
        ],
      },
      {
        id: 4,
        title: "Communication Protocol Support",
        rows: [
          {
            label: "Industrial Protocols",
            value: "Not Supported",
          },
        ],
      },
      {
        id: 5,
        title: "Physical Specifications",
        rows: [
          { label: "Dimensions (L × W × H)", value: "120 × 80 × 30 mm" },
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
          { label: "Enclosure Protection", value: "IP65" },
        ],
      },
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
    id: 12,
    category: "controllers",
    name: "SINGLE PHASE ENERGY MONITORING RTU (TSRTU0002)",
    overview: "single-phase energy monitoring and control applications. The device operates like a single-phase energy meter and includes an AC output for load control, allowing direct switching of the connected load. It supports monitoring of all essential electrical energy parameters, including voltage, current, power, energy, power factor, and frequency. A single CT input is provided for accurate current measurement, making it suitable for street lighting and other single-phase load monitoring applications. The RTU features built-in Wi-Fi connectivity for wireless data transmission and remote monitoring. An onboard Real-Time Clock (RTC) ensures accurate time-stamped data logging, while EEPROM and Flash memory provide secure non-volatile storage of configuration parameters, calibration data, and energy logs, even during power interruptions.",
    description:
      "Single phase energy monitoring device with MODBUS RTU communication for power consumption tracking in industrial environments.",
    price: "N/A",
    heroBgImage:
      "assets/Desktop_1440 x 626 px_SINGLE_PHASE_ENERGYMONITORING.jpg",
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
          { label: "WIFI", value: "IEEE 802.11 Wireless Network" },
        ],
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
          { label: "Enclosure Protection", value: "IP65" },
        ],
      },
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
    id: 13,
    category: "controllers",
    name: "WEATHER STATION RTU (TSRTU0005)",
    overview: "WEATHER STATION RTU (TSRTU0005) is a comprehensive industrial-grade RTU designed for weather and environmental monitoring applications. The device features 4G connectivity for remote data transmission and monitoring, along with Modbus support for seamless integration with SCADA and IoT systems. It is equipped with 6 Analog Input (AI) channels and 2 Digital Input (DI) channels for connecting a variety of sensors, including rain, temperature, humidity, wind speed, and other environmental sensors. The RTU includes built-in Wi-Fi, an LCD display for local visualization, and storage options such as EEPROM, Flash memory, SD card, and USB pendrive support for secure logging and data retention. An onboard Real-Time Clock (RTC) ensures accurate time-stamped measurements for reliable monitoring and analysis. The TSRTU0005 is ideal for remote weather stations, environmental monitoring, smart agriculture, and industrial IoT applications, providing robust, long-term, and accurate data acquisition in challenging outdoor conditions.",
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
  },
  {
    id: 14,
    category: "io-modules",
    name: "MINI ETHERNET 4CH IO Card (TSIOC002)",
    overview: "MINI ETHERNET 4CH IO Card (TSIOC002) is a compact industrial I/O card designed for reliable data acquisition and control over Ethernet. The device supports Modbus TCP, enabling seamless integration with PLCs, SCADA systems, and industrial networks. It features 4 Analog Input (AI) channels, 4 Digital Input (DI) channels, and 4 Digital Output (DO) channels, offering flexible interfacing for sensors and actuators in industrial applications. The card includes EEPROM, Flash memory, and an RTC (Real-Time Clock) for secure non-volatile storage of configuration data, calibration data, and time-stamped logs. With its compact and robust design, the TSIOC002 is ideal for distributed I/O, machine control, and industrial Ethernet applications.",
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
      { label: "Peak Operating Current", value: "2 A @ network activities" }
    ]
  },
  {
    id: 2, 
    title: "Communication Features",
    rows: [
      { label: "GSM/GPRS", value: "NA" },
      { label: "WIFI", value: "IEEE 802.11 Wireless Network" }
    ]
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
      { label: "Antenna", value: "External WIFI" },
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
      { label: "Enclosure Protection", value: "IP65" }
    ]
  }
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
  category: [],
  communication: [],
  power: [],
  io: [],
  application: []
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
      category: [],
      communication: [],
      power: [],
      io: [],
      application: []
    };

    const checkboxes = document.querySelectorAll(".filter-checkbox input");
    checkboxes.forEach((cb) => (cb.checked = false));

    currentCategory = "all";
    const navItems = document.querySelectorAll(".nav-item");
    navItems.forEach((nav) => nav.classList.remove("active"));
    navItems[0].classList.add("active");

    renderProducts();
  });
}
// Mobile filter toggle
document.addEventListener("DOMContentLoaded", function () {
  const mobileFilterBtn = document.getElementById("mobileFilterBtn");
  const sidebar = document.querySelector(".sidebar");
  const closeSidebar = document.querySelector(".close-sidebar");
  const overlay = document.querySelector(".overlay") || createOverlay();

  function createOverlay() {
    const overlay = document.createElement("div");
    overlay.className = "overlay";
    document.body.appendChild(overlay);
    return overlay;
  }

  if (mobileFilterBtn) {
    mobileFilterBtn.addEventListener("click", function () {
      sidebar.classList.add("active");
      overlay.classList.add("active");
      document.body.style.overflow = "hidden"; // Prevent scrolling when sidebar is open
    });
  }

  if (closeSidebar) {
    closeSidebar.addEventListener("click", closeFilter);
  }

  if (overlay) {
    overlay.addEventListener("click", closeFilter);
  }

  function closeFilter() {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = ""; // Re-enable scrolling
  }

  // Close on escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeFilter();
    }
  });
});

// Filter products based on category and active filters
function filterProducts() {
  let filtered = products;

  // Filter by category from checkboxes
  if (activeFilters.category.length > 0) {
    filtered = filtered.filter((p) => 
      activeFilters.category.includes(p.category)
    );
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

// Mobile filter toggle functionality
document.addEventListener("DOMContentLoaded", function () {
  const mobileFilterBtn = document.getElementById("mobileFilterBtn");
  const sidebar = document.getElementById("sidebarFilters");
  const closeSidebar = document.getElementById("closeSidebar");
  const sidebarOverlay = document.getElementById("sidebarOverlay");
  const body = document.body;

  // Toggle sidebar
  function toggleSidebar() {
    sidebar.classList.toggle("active");
    sidebarOverlay.classList.toggle("active");
    body.classList.toggle("sidebar-open");
  }

  // Open sidebar
  if (mobileFilterBtn) {
    mobileFilterBtn.addEventListener("click", function (e) {
      e.preventDefault();
      toggleSidebar();
    });
  }

  // Close sidebar
  if (closeSidebar) {
    closeSidebar.addEventListener("click", function (e) {
      e.preventDefault();
      toggleSidebar();
    });
  }

  // Close when clicking on overlay
  if (sidebarOverlay) {
    sidebarOverlay.addEventListener("click", function () {
      toggleSidebar();
    });
  }

  // Close with Escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && sidebar.classList.contains("active")) {
      toggleSidebar();
    }
  });
});

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
