# SOCForge

## Building and Validating a Home Security Operations Center

SOCForge is a cybersecurity home lab project that demonstrates the design, implementation, and validation of a Security Operations Center (SOC) using open-source technologies. The project focuses on endpoint visibility, detection engineering, adversary simulation, and security event investigation.

---

## Overview

SOCForge was developed to gain hands-on experience with modern SOC operations by building a functional monitoring environment capable of collecting endpoint telemetry, generating security alerts, and validating custom detections against simulated attacker behavior.

The environment uses **Wazuh** for centralized security monitoring, **Sysmon** for enhanced Windows endpoint telemetry, and the **MITRE ATT&CK** framework to classify observed adversary techniques.

---

## Technologies

- Wazuh
- Sysmon
- Windows Endpoint Telemetry
- MITRE ATT&CK Framework
- HTML5
- CSS3
- JavaScript

---

## Key Features

- Built a home Security Operations Center (SOC)
- Collected and analyzed Windows endpoint telemetry
- Developed custom detection rules
- Simulated adversary techniques
- Investigated generated security alerts
- Mapped detections to the MITRE ATT&CK framework
- Documented the project in a professional technical report

---

## Detection Engineering

The project includes custom detections for:

- Suspicious PowerShell execution
- PowerShell download activity
- Living-off-the-Land Binary (LOLBIN) techniques
- Custom Wazuh alert validation

---

## Adversary Simulation

The following attack scenarios were executed within the lab environment:

- PowerShell execution
- Execution policy bypass
- Hidden PowerShell execution
- PowerShell download activity
- Certutil execution
- Mshta execution
- Rundll32 execution

Each simulation generated endpoint telemetry that was successfully collected by Sysmon, analyzed by Wazuh, and mapped to the MITRE ATT&CK framework.

---

## Technical Report

The complete project documentation is available in:

**SOCForge_Report.pdf**

The report documents:

- Lab architecture
- Environment setup
- Detection engineering
- Adversary simulation
- Investigation findings
- Lessons learned

---

## Project Website

Explore the SOCForge interactive documentation website:

[View SOCForge Website](https://socforge.netlify.app)

---

## Skills Demonstrated

- Security Operations (SOC)
- Detection Engineering
- Endpoint Monitoring
- Threat Detection
- Incident Investigation
- Windows Logging
- SIEM/XDR
- Threat Hunting
- MITRE ATT&CK Mapping

---

## Author

**Sarvesh Komarraju**
