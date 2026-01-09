const questionBank = [
    // ========================================================================
    // MEDIUM QUESTIONS (Application, Classification, Discrimination)
    // ========================================================================
    {
        difficulty: "Medium",
        question: "In the context of the 2024 Microsoft Recall vulnerability, the feature captured screenshots but stored them in an unencrypted SQLite database. Why is this classified as a 'Flaw' rather than an 'Error'?",
        options: [
            "It was an architectural decision to prioritize ease of access over security, creating an inherent weakness.",
            "It was a runtime coding typo that caused the encryption module to fail intermittently.",
            "It was a configuration mistake made by the end-users who failed to enable BitLocker.",
            "It was a feature that functioned exactly as intended but was exploited by a Zero-Day malware."
        ],
        answer: 0,
        explanation: "A Flaw is a defect in the design/logic (storing data unencrypted by design). An Error is a mistake in implementation (a bug/typo). Recall worked as designed; the design itself was the risk."
    },
    {
        difficulty: "Medium",
        question: "You are analyzing a cyberattack where the adversary used a generic, off-the-shelf phishing kit to harvest credentials from thousands of random victims. However, they successfully breached a high-profile bank. How would you classify this attack?",
        options: [
            "Targeted / Commodity: The victim selection was high-value, but the tooling was generic and low-cost.",
            "Untargeted / Bespoke: The tools were custom-written, but the victim selection was random.",
            "Targeted / Bespoke: Both the tools and the victim selection were highly specific and expensive.",
            "Untargeted / Commodity: Both the tools and the victim pool were random and non-specific."
        ],
        answer: 0,
        explanation: "Attack classification distinguishes between the *Targeting* (Bank = Targeted) and the *Tooling* (Phishing Kit = Commodity). High impact does not automatically mean Bespoke tooling."
    },
    {
        difficulty: "Medium",
        question: "A company's firewall rule set has 'Deny All' at Rule #100. A new rule 'Allow Port 80' is added at Rule #101. Why does HTTP traffic fail to pass, and how does the firewall logic process this?",
        options: [
            "Firewalls process rules top-down; traffic matched the implicit or explicit Deny at #100 and stopped processing.",
            "Port 80 is deprecated in favor of 443; the firewall automatically rejects insecure protocols regardless of rule order.",
            "The rule is valid, but the stateful inspection engine requires a corresponding bidirectional rule at Rule #102.",
            "Firewalls prioritize Deny rules over Allow rules regardless of their numerical position in the Access Control List."
        ],
        answer: 0,
        explanation: "Firewalls execute the 'First Match' logic. Once traffic matches the 'Deny All' at #100, the firewall stops evaluating. Rule #101 is shadowed and never reached."
    },
    {
        difficulty: "Medium",
        question: "In an RSA key generation process, why must the Totient (phi) remain a secret, even though the Modulus (n) is public?",
        options: [
            "Knowledge of the Totient allows the derivation of the Private Key (d) from the Public Exponent (e).",
            "The Totient is used to encrypt the message, while the Modulus is used only for digital signatures.",
            "If the Totient is known, an attacker can modify the Public Exponent (e) to force a collision.",
            "The Totient contains the raw prime numbers (p and q) in plaintext format."
        ],
        answer: 0,
        explanation: "The Totient is the mathematical bridge. The formula d = e^-1 mod phi(n) allows anyone with phi to calculate the private key d."
    },
    {
        difficulty: "Medium",
        question: "During a forensic audit, you find that an administrator deleted the system logs to cover up unauthorized file access. Which specific STRIDE threat category does this deletion represent, and what is the primary security consequence?",
        options: [
            "Repudiation: The admin can now plausibly deny the action because the evidence of the event is removed.",
            "Tampering: The integrity of the system is compromised, leading to a potential Denial of Service.",
            "Elevation of Privilege: Deleting logs requires root access, proving the admin escalated their rights.",
            "Information Disclosure: The act of deleting logs reveals that sensitive data was likely accessed."
        ],
        answer: 0,
        explanation: "While the act is Tampering (modifying data), the *Threat Category* in STRIDE regarding the inability to prove authorship is Repudiation."
    },
    {
        difficulty: "Medium",
        question: "A student copies a licensed software installer to a USB drive and gives it to a friend. Under UK Law, which legislation has been violated, and why is it not the Computer Misuse Act (CMA)?",
        options: [
            "Copyright, Designs and Patents Act: The issue is intellectual property theft, not unauthorized access to a computer system.",
            "Computer Misuse Act Section 1: It involves unauthorized access to the software's binary code.",
            "The Fraud Act: The student made a false representation by pretending to be the license holder.",
            "GDPR: The software installer contains personal data of the original purchaser."
        ],
        answer: 0,
        explanation: "CMA requires 'unauthorized access' (hacking). Copying files you legally have access to (but don't have the right to distribute) is an IP violation (Copyright)."
    },
    {
        difficulty: "Medium",
        question: "In a 3-Party RADIUS architecture (802.1x), why is the Switch defined as the 'Client' rather than the user's laptop?",
        options: [
            "The Switch maintains the Shared Secret trust relationship with the RADIUS server, not the laptop.",
            "The laptop acts as the Server because it holds the user credentials.",
            "The Switch is the device that encrypts the EAP tunnel, while the laptop sends plaintext.",
            "In 802.1x, 'Client' refers to the device being authenticated, which is the Switch port."
        ],
        answer: 0,
        explanation: "In RADIUS protocol terms, the device sending the Access-Request (the NAS/Switch) is the Client. The laptop is the Supplicant."
    },
    {
        difficulty: "Medium",
        question: "You are deploying a wireless network for a university (BYOD). You cannot install certificates on student phones. Which EAP method balances security with this operational constraint?",
        options: [
            "PEAP: It creates a TLS tunnel using only a server-side certificate, protecting the user's password inside.",
            "EAP-TLS: It offers the highest security by requiring certificates on both the server and every student device.",
            "EAP-MD5: It is the fastest to deploy and hashes the password, providing sufficient protection for Wi-Fi.",
            "LEAP: It is a legacy Cisco protocol that supports mutual authentication without certificates."
        ],
        answer: 0,
        explanation: "EAP-TLS requires client certs (admin heavy). EAP-MD5 is insecure. PEAP creates a secure tunnel using only a server cert, making it ideal for BYOD."
    },
    {
        difficulty: "Medium",
        question: "Why does IPsec Tunnel Mode hide the internal network topology while Transport Mode does not?",
        options: [
            "Tunnel Mode encapsulates the entire original packet in a new IP header; Transport Mode only encrypts the payload.",
            "Tunnel Mode uses TCP which establishes a new connection state; Transport Mode relies on stateless UDP.",
            "Tunnel Mode is used exclusively for NAT traversal, which inherently masks IP addresses.",
            "Transport Mode copies the destination IP to the payload, whereas Tunnel Mode deletes it."
        ],
        answer: 0,
        explanation: "Transport mode leaves the original IP header (Source/Dest) visible for routing. Tunnel mode wraps the whole packet, so observers only see the Gateway IPs, not the internal hosts."
    },
    {
        difficulty: "Medium",
        question: "A router receives a packet for destination 10.1.1.5. It has two routes in its table: 10.1.1.0/24 and 10.1.0.0/16. Which route does it select and why?",
        options: [
            "10.1.1.0/24: It uses the Longest Prefix Match logic, preferring the more specific network definition.",
            "10.1.0.0/16: It uses the First Match logic to reduce latency in high-speed routing.",
            "10.1.0.0/16: It prefers the route with the larger address space to prevent loops.",
            "Both: It performs load balancing across both interfaces to optimize bandwidth."
        ],
        answer: 0,
        explanation: "Routing logic always prioritizes the 'Longest Prefix Match' (most specific subnet mask) regardless of the order in the table."
    },

    // ========================================================================
    // HARD QUESTIONS (Complex Scenarios, Math, Architecture)
    // ========================================================================
    {
        difficulty: "Hard",
        question: "Scenario: An e-commerce server crashes. MTD is 4 hours. A vendor repair costs £5,000 and takes 2 hours. An in-house fix costs £500 (labor) but takes 6 hours. The estimated downtime loss is £10,000/hour. Which option is the correct management decision?",
        options: [
            "Vendor: Although the upfront cost is higher, the In-House option violates the MTD constraint and incurs higher total loss.",
            "In-House: The direct repair cost is significantly lower (£500 vs £5,000), optimizing the IT budget.",
            "In-House: 6 hours is close enough to the 4-hour MTD, and the £4,500 saving justifies the slight delay.",
            "Vendor: External vendors offer a warranty on repairs, whereas in-house fixes do not guarantee stability."
        ],
        answer: 0,
        explanation: "You cannot violate MTD. In-house takes 6 hours (Fail). Vendor takes 2 hours (Pass). Also, total cost for In-House = £60k loss + £500. Vendor = £20k loss + £5k. Vendor saves money and the business."
    },
    {
        difficulty: "Hard",
        question: "Calculate the ALE: A proprietary database is worth £500,000. It is split across 5 drives. A threat event (theft of 1 drive) occurs once every 4 years. What is the ALE?",
        options: [
            "£25,000: (Asset Value × Exposure Factor) × ARO.",
            "£100,000: The single loss expectancy is the total value of the stolen drive.",
            "£125,000: The Asset Value divided by the years of occurrence.",
            "£20,000: The exposure factor is 20%, calculated annually."
        ],
        answer: 0,
        explanation: "SLE = £500k * 0.2 (1/5 drives) = £100k. ARO = 0.25 (1 in 4 years). ALE = £100k * 0.25 = £25,000."
    },
    {
        difficulty: "Hard",
        question: "In a physical security breach (Scenario: 'The Server Room Bypass'), the guard used a 'Manual Override' button to open a turnstile for an unverified technician. What is the specific control gap here?",
        options: [
            "Lack of Audit Trail/Non-Repudiation: The single-action button bypassed authentication without logging who authorized the entry.",
            "Weak Physical Barriers: The turnstile was insufficient to prevent tailgating by a determined intruder.",
            "Improper Key Management: The guard should not have had access to the master key for the server room.",
            "Failure of Biometrics: The technician's fingerprint should have been required in addition to the badge."
        ],
        answer: 0,
        explanation: "The core failure was a process flaw: a mechanism (override) existed that bypassed all checks (Identity/Auth) without creating a log (Accounting), breaking the AAA framework."
    },
    {
        difficulty: "Hard",
        question: "A company implements a 'Cold Site' for DR. A disaster strikes at 09:00. The RTO is 4 hours. Why will this recovery strategy likely fail?",
        options: [
            "Cold Sites require provisioning hardware and data restoration, which typically takes days or weeks, exceeding the 4-hour RTO.",
            "Cold Sites are located too close to the primary site and likely affected by the same disaster.",
            "Cold Sites do not support synchronous data replication, meaning the RPO will be zero.",
            "Cold Sites are legally required to be offline for 24 hours before activation."
        ],
        answer: 0,
        explanation: "A Cold Site provides space/power but no IT equipment. Procurement, setup, and restore times make it impossible to meet a tight 4-hour RTO."
    },
    {
        difficulty: "Hard",
        question: "Why is the 'Feistel Network' structure used in encryption algorithms like DES considered advantageous for hardware implementation?",
        options: [
            "Encryption and Decryption use the exact same circuit/code, only requiring the sub-keys to be applied in reverse order.",
            "It eliminates the need for the XOR operation, which is computationally expensive on legacy processors.",
            "It allows the Round Function (F) to be irreversible, which is mathematically required for asymmetric encryption.",
            "It doubles the effective key size by splitting the data block into two independent 64-bit halves."
        ],
        answer: 0,
        explanation: "The structural symmetry of Feistel means you don't need separate hardware for encryption and decryption; you just reverse the key schedule. The irreversibility of F is a feature, not a requirement for asymmetry."
    },
    {
        difficulty: "Hard",
        question: "A network uses 802.1x. A user connects a laptop. The switch port is in an 'Unauthorized' state. The user attempts to ping the gateway (ICMP). What happens to the packet and why?",
        options: [
            "Dropped: The port logically blocks all non-EAPOL traffic (Layer 2) until the RADIUS server sends an Access-Accept.",
            "Allowed: ICMP is a control protocol essential for network connectivity and is bypassed by the 802.1x filter.",
            "Forwarded: The switch forwards the packet to the RADIUS server to check if the IP is valid.",
            "Encapsulated: The switch wraps the ICMP packet in EAP and sends it to the Authentication Server."
        ],
        answer: 0,
        explanation: "The Controlled Port is closed. It strictly blocks regular data traffic (IP/ICMP). Only EAPOL (authentication traffic) is permitted on the Uncontrolled Port."
    },
    {
        difficulty: "Hard",
        question: "If a company has an RPO (Recovery Point Objective) of 1 hour and performs backups every 4 hours, what is the risk posture?",
        options: [
            "High Risk: In a disaster, the company will lose up to 4 hours of data, violating the 1-hour business requirement.",
            "Compliant: The RPO is a target, not a hard limit; backup frequency is a technical constraint.",
            "Low Risk: Differential backups will capture the data changes in real-time between the 4-hour intervals.",
            "Unknown: RPO is calculated based on the time to restore (RTO), not the backup frequency."
        ],
        answer: 0,
        explanation: "RPO defines acceptable data loss. If you backup every 4 hours, you risk losing 3 hours and 59 minutes of data. This exceeds the 1-hour tolerance."
    },
    {
        difficulty: "Hard",
        question: "Why is 'DNS Tunneling' an effective method for data exfiltration in environments with strict firewalls?",
        options: [
            "DNS (UDP 53) is rarely blocked because it is essential for network operations, allowing attackers to encode data in queries.",
            "DNS traffic is encrypted by default, making it impossible for firewalls to inspect the payload.",
            "DNS requests bypass the firewall entirely by using the loopback interface on the recursive resolver.",
            "DNS Tunneling forces the firewall to switch to 'Fail Open' mode due to high packet volume."
        ],
        answer: 0,
        explanation: "Firewalls usually permit Port 53 to allow users to resolve domain names. Attackers exploit this 'allow' rule to hide non-DNS data inside the queries."
    },
    {
        difficulty: "Hard",
        question: "In the MGM Casino hack, the attackers obtained Domain Admin privileges within 45 minutes of the initial breach. Which architectural failure allowed this rapid escalation?",
        options: [
            "Poor Privilege Separation (Tiering): The compromised Okta user had excessive rights or paths to critical servers.",
            "Weak Encryption: The attackers brute-forced the AES-256 keys used for the VPN.",
            "Lack of MFA: The initial helpdesk call did not require a token, which automatically grants Domain Admin rights.",
            "Cloud Misconfiguration: The Azure AD sync service was public facing."
        ],
        answer: 0,
        explanation: "While the initial entry was Social Engineering (MFA bypass), the *rapid escalation* to Domain Admin implies a flat network or lack of privilege tiering (Tier 0/1/2 separation)."
    },
    {
        difficulty: "Hard",
        question: "Which of the following scenarios represents a 'Bespoke' attack using a 'Commodity' tool?",
        options: [
            "A nation-state actor researches a specific CEO (Targeted) but uses a standard version of LockBit ransomware (Commodity) to encrypt the network.",
            "A script-kiddie buys a custom Zero-Day exploit (Bespoke) to attack random IP addresses (Untargeted).",
            "A criminal group writes a custom malware strain (Bespoke) to target a specific nuclear facility (Targeted).",
            "A phishing campaign sends 1 million emails (Untargeted) using a free mailer script (Commodity)."
        ],
        answer: 0,
        explanation: "This highlights the 'Hybrid' nature of modern attacks. Sophisticated targeting (Social Engineering/Recon) often delivers standard, reliable payloads (Commodity ransomware) to save costs."
    }
];