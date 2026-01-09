const questionBank = [
    // --- WEEK 1: Basics & Cyber Kill Chain ---
    {
        question: "In the context of the V-T-R analogy, what represents a 'Vulnerability'?",
        options: ["The bad guy who uses the exploit", "A weak spot in your defense", "The cost of the damage", "The frequency of the attack"],
        answer: 1,
        explanation: "According to the Week 1 material, a Vulnerability is defined as a weak spot in your defense (like a weakly managed castle entry)."
    },
    {
        question: "Which of the following best describes a 'Commodity Attack'?",
        options: ["A hand-crafted attack built for one specific target", "A state-sponsored attack costing millions", "A ready-made, cheap tool used on millions of victims", "An attack that exploits unique zero-day flaws"],
        answer: 2,
        explanation: "Commodity attacks are off-the-shelf, low cost, high volume attacks (like phishing emails or standard ransomware) used by ordinary criminals."
    },
    {
        question: "In the Cyber Kill Chain, what happens during the 'Exploitation' phase?",
        options: ["The attacker researches the target", "The weapon is delivered via email", "The weapon's code is triggered to exploit a vulnerability", "The attacker steals the data"],
        answer: 2,
        explanation: "Exploitation occurs once the weapon is delivered and triggered, exploiting vulnerable applications or systems."
    },
    {
        question: "What distinguishes a 'Bespoke Attack' from a commodity attack?",
        options: ["It is cheap and easy to launch", "It is hand-crafted and built only for ONE target", "It targets random people", "It uses tools downloaded from the dark web"],
        answer: 1,
        explanation: "Bespoke attacks (like Stuxnet or SolarWinds) are custom-made for a specific target, highly expensive, and often state-sponsored."
    },
    {
        question: "If a company intentionally builds a system to stay connected for 48 hours without a password for ease of use, this is considered a:",
        options: ["Flaw", "Feature", "Error", "Bug"],
        answer: 1,
        explanation: "A Feature is something intentionally built for ease of use, even if it has a security trade-off. A Flaw is an unintended mistake."
    },

    // --- WEEK 2: Risk Analysis ---
    {
        question: "What is the formula for Single Loss Expectancy (SLE)?",
        options: ["SLE = Asset Value × ARO", "SLE = Asset Value × Exposure Factor", "SLE = ARO × Exposure Factor", "SLE = ALE - ACS"],
        answer: 1,
        explanation: "SLE is calculated as the Asset Value (AV) multiplied by the Exposure Factor (EF)."
    },
    {
        question: "If an asset is worth £100,000 and the Exposure Factor is 20%, what is the SLE?",
        options: ["£200,000", "£2,000", "£20,000", "£80,000"],
        answer: 2,
        explanation: "SLE = AV × EF. £100,000 × 0.20 = £20,000."
    },
    {
        question: "What does Annual Loss Expectancy (ALE) calculate?",
        options: ["The total value of the asset", "The expected monetary loss from a single incident", "The expected yearly financial loss due to a specific risk", "The cost of the security control"],
        answer: 2,
        explanation: "ALE tells us exactly how much money (on average) we expect to lose every year because of a specific risk. Formula: ALE = SLE × ARO."
    },
    {
        question: "In a Risk Matrix, Risk Score is typically calculated as:",
        options: ["Likelihood × Cost", "Likelihood × Impact", "Vulnerability × Threat", "Asset + Threat"],
        answer: 1,
        explanation: "A Risk Matrix maps risks on two axes: Likelihood (probability) and Impact (severity). Risk Score = Likelihood × Impact."
    },
    {
        question: "Which of the following is considered a 'Non-IT Risk'?",
        options: ["SQL Injection", "Ransomware", "Warehouse Fire", "DDoS Attack"],
        answer: 2,
        explanation: "A Warehouse Fire is a physical/environmental threat. The others are digital/technical risks requiring IT systems."
    },

    // --- WEEK 3: BCP vs DR & STRIDE ---
    {
        question: "What is the primary focus of Business Continuity Planning (BCP)?",
        options: ["Restoring IT infrastructure", "Keeping the business running during a disaster", "Preventing hackers from entering", "Encrypting data"],
        answer: 1,
        explanation: "BCP focuses on keeping the business operations running ('How do we continue to make money?'), whereas DR focuses on IT restoration."
    },
    {
        question: "In the STRIDE model, what does 'R' stand for?",
        options: ["Recovery", "Repudiation", "Risk", "Redundancy"],
        answer: 1,
        explanation: "R stands for Repudiation (Denying actions). It refers to the ability of a user to deny having performed an action."
    },
    {
        question: "Which STRIDE category is mitigated by 'Multi-Factor Authentication (MFA)'?",
        options: ["Tampering", "Information Disclosure", "Spoofing", "Denial of Service"],
        answer: 2,
        explanation: "Spoofing involves impersonation. MFA helps verify identity, thus mitigating Spoofing threats."
    },
    {
        question: "If an employee deletes a row from a database log to hide theft, which STRIDE threat is this?",
        options: ["Spoofing", "Tampering", "Elevation of Privilege", "Repudiation"],
        answer: 1,
        explanation: "Tampering involves modifying data. Deleting logs is a form of modifying data to hide tracks."
    },

    // --- WEEK 4: Crisis Management (RACI/DRP/SLA) ---
    {
        question: "In a RACI matrix, who is the 'Accountable' person?",
        options: ["The person doing the work", "The person whose opinion is sought", "The person ultimately answerable who gives final approval", "The person kept up-to-date"],
        answer: 2,
        explanation: "Accountable (A) is the one person ultimately answerable for the correct completion of the task. There can only be one 'A'."
    },
    {
        question: "What defines the 'Recovery Time Objective' (RTO)?",
        options: ["How much data can we lose?", "How long can we be down?", "The cost of the backup solution", "The maximum file size allowed"],
        answer: 1,
        explanation: "RTO is the target time set for the resumption of delivery ('How long can we be down?')."
    },
    {
        question: "What defines the 'Recovery Point Objective' (RPO)?",
        options: ["The maximum targeted period in which data might be lost", "The time it takes to fix a server", "The budget for disaster recovery", "The speed of the network"],
        answer: 0,
        explanation: "RPO determines how much data loss is acceptable (e.g., 'If we back up every hour, we risk losing 59 minutes of data')."
    },
    {
        question: "A Service Level Agreement (SLA) is:",
        options: ["A list of employees", "A contract between a service provider and a customer", "A type of firewall", "A disaster recovery plan"],
        answer: 1,
        explanation: "An SLA is a contract defining the service, performance (uptime), and penalties if promises aren't met."
    },

    // --- WEEK 5: Social Engineering ---
    {
        question: "Social Engineering is best defined as:",
        options: ["Breaking into systems via code vulnerabilities", "Compromising a system by compromising its users", "Using brute force to crack passwords", "Intercepting Wi-Fi signals"],
        answer: 1,
        explanation: "Social Engineering applies sociological and psychological concepts to compromise users rather than technical flaws."
    },
    {
        question: "What is 'Pretexting'?",
        options: ["Sending spam emails", "Creating a believable lie or story to establish authority", "Stealing a laptop", "Using a virus to encrypt files"],
        answer: 1,
        explanation: "Pretexting involves creating a scenario (the pretext) to engage a victim and obtain information."
    },
    {
        question: "Which of the following is a physical social engineering attack?",
        options: ["Phishing", "Smishing", "Tailgating", "Vishing"],
        answer: 2,
        explanation: "Tailgating (or piggybacking) is following someone into a secure area physically. The others are digital/phone based."
    },
    {
        question: "In the context of the Google Phishing Quiz, why should you check the full email address?",
        options: ["To see if the sender is online", "To verify if the domain matches the brand it claims to be", "To check the time zone", "To see the sender's profile picture"],
        answer: 1,
        explanation: "Attackers often spoof display names. Checking the actual domain (e.g., @google.com vs @g00gle.com) verifies legitimacy."
    },

    // --- WEEK 6: Cryptography ---
    {
        question: "In a Feistel Network, encryption relies on:",
        options: ["One complex mathematical rule", "Repetition of simple operations (Rounds)", "Keeping the algorithm secret", "Manual calculation"],
        answer: 1,
        explanation: "Feistel networks rely on repetition of simple operations (Round Function) to create Confusion and Diffusion."
    },
    {
        question: "In RSA, which component is kept strictly PRIVATE?",
        options: ["The Modulus (n)", "The Public Exponent (e)", "The Totient (phi(n))", "The Ciphertext"],
        answer: 2,
        explanation: "The Totient (phi(n)) is the trapdoor secret used to calculate the private key. If known, the system collapses."
    },
    {
        question: "What is the mathematical trapdoor used in RSA?",
        options: ["The discrete logarithm problem", "The Factoring Problem (Primes)", "Elliptic Curve Cryptography", "XOR Operations"],
        answer: 1,
        explanation: "RSA relies on the difficulty of factoring the product of two large prime numbers."
    },
    {
        question: "In asymmetric encryption (like RSA), the Public Key is used to:",
        options: ["Decrypt data", "Encrypt data", "Calculate the Totient", "Store the password"],
        answer: 1,
        explanation: "The Public Key is shared with everyone and used to Encrypt data. The Private Key decrypts it."
    },

    // --- WEEK 7: IP Addressing & Networking ---
    {
        question: "Which IP Class is defined by the range 192.0.0.0 – 223.255.255.255?",
        options: ["Class A", "Class B", "Class C", "Class D"],
        answer: 2,
        explanation: "Class C addresses start with bits 110, resulting in the range 192-223."
    },
    {
        question: "What is the purpose of the Loopback address (127.0.0.1)?",
        options: ["To broadcast to the whole network", "To test if the local TCP/IP stack is functioning", "To connect to the internet", "To route packets to a gateway"],
        answer: 1,
        explanation: "Loopback testing checks if the system's own network interface is functioning by sending traffic to itself."
    },
    {
        question: "In a CIDR notation like /24, what does the number represent?",
        options: ["The number of hosts", "The number of bits fixed for the Network", "The number of subnets", "The class of the IP"],
        answer: 1,
        explanation: "/24 means the first 24 bits of the 32-bit address are the Network part, leaving 8 bits for Hosts."
    },
    {
        question: "Which DNS record type points a domain name to an IPv4 address?",
        options: ["MX Record", "NS Record", "A Record", "CNAME Record"],
        answer: 2,
        explanation: "The 'A' (Address) record maps a domain name to its corresponding IPv4 address."
    },
    {
        question: "When a router chooses an interface to send a packet, it primarily looks at:",
        options: ["The Source IP", "The Destination IP", "The MAC address", "The Payload"],
        answer: 1,
        explanation: "Routers make forwarding decisions based on the Destination IP address in the packet header."
    },

    // --- WEEK 8: AAA & Protocols ---
    {
        question: "Which pillar of AAA answers the question 'What did you do?'",
        options: ["Authentication", "Authorization", "Accounting", "Administration"],
        answer: 2,
        explanation: "Accounting tracks user activity, logging session times and data usage for auditing."
    },
    {
        question: "In a typical university network using 802.1x, which device is the 'RADIUS Client'?",
        options: ["The Student's Laptop", "The Switch / Access Point", "The RADIUS Server", "The Internet"],
        answer: 1,
        explanation: "The Network Access Server (NAS), which is the Switch or AP, acts as the RADIUS Client. The laptop is the Supplicant."
    },
    {
        question: "Which EAP method uses certificates on BOTH the client and the server?",
        options: ["EAP-MD5", "PEAP", "EAP-TLS", "LEAP"],
        answer: 2,
        explanation: "EAP-TLS requires client-side and server-side certificates, offering the highest security via mutual authentication."
    },
    {
        question: "Which IPsec mode encapsulates the ENTIRE original packet (including the IP header)?",
        options: ["Transport Mode", "Tunnel Mode", "Bridge Mode", "Hybrid Mode"],
        answer: 1,
        explanation: "Tunnel Mode encrypts the entire original packet and adds a new IP header. It is mandatory for Site-to-Site VPNs."
    },
    {
        question: "What is the main advantage of PEAP over EAP-TLS?",
        options: ["It is more secure", "It requires fewer certificates (Server only)", "It doesn't use encryption", "It works without a server"],
        answer: 1,
        explanation: "PEAP creates a secure tunnel using only a Server-side certificate, making it easier to manage for BYOD as client certs aren't needed."
    },
    
    // --- Additional Mixed Practice ---
    {
        question: "What does the 'OUI' represent in a MAC address?",
        options: ["The Serial Number", "The Manufacturer (Vendor)", "The IP Address", "The Network Speed"],
        answer: 1,
        explanation: "The first 3 bytes of a MAC address are the Organizationally Unique Identifier (OUI), identifying the manufacturer."
    },
    {
        question: "If a firewall rule says 'Deny All' at the top of the list, what happens to traffic?",
        options: ["It is allowed if a later rule allows it", "It is blocked immediately", "It is quarantined", "It is sent to the admin"],
        answer: 1,
        explanation: "Firewalls process rules top-to-bottom. If the first match is 'Deny', the traffic is blocked and processing stops."
    },
    {
        question: "Which command would you use to see the path a packet takes to a destination?",
        options: ["ping", "ipconfig", "tracert", "nslookup"],
        answer: 2,
        explanation: "Tracert (Trace Route) reveals the path taken by packets and shows every hop (router) along the way."
    },
    {
        question: "In the context of RSA, if you know n and phi(n), you can calculate:",
        options: ["The Public Key only", "The Private Key (d)", "The MAC address", "The Hash"],
        answer: 1,
        explanation: "Knowledge of phi(n) allows the derivation of the private key (d). This is why phi(n) must remain secret."
    },
    {
        question: "What is a 'Zero-Day' vulnerability?",
        options: ["A flaw known for 0 days (developers have no fix yet)", "A flaw that does 0 damage", "A flaw fixed in 0 days", "A virus that lasts 0 days"],
        answer: 0,
        explanation: "A Zero-Day is a vulnerability that is exploited before the vendor is aware of it or has a patch available."
    },
    {
        question: "Which activity involves gathering data about a target before attacking?",
        options: ["Exploitation", "Reconnaissance", "Delivery", "Installation"],
        answer: 1,
        explanation: "Reconnaissance (OSINT) is the first step of the Cyber Kill Chain, involving research and identification of targets."
    },
    {
        question: "Which protocol is used for standard DNS queries?",
        options: ["TCP", "UDP", "HTTP", "FTP"],
        answer: 1,
        explanation: "DNS primarily uses UDP on port 53 because it is fast and connectionless. TCP is used for large transfers."
    },
    {
        question: "What is the outcome of a successful ARP Spoofing attack?",
        options: ["The server crashes", "The attacker intercepts traffic meant for the gateway", "The firewall is disabled", "The password is changed"],
        answer: 1,
        explanation: "ARP Spoofing maps the attacker's MAC address to a legitimate IP (like the gateway), allowing interception of traffic (Man-in-the-Middle)."
    },
    {
        question: "In a 2-party authentication model, authentication happens between:",
        options: ["Client and Server directly", "Client, Authenticator, and Server", "Client and Internet", "Server and Database"],
        answer: 0,
        explanation: "2-Party model (like home Wi-Fi) involves direct interaction between the Client and the Access Point (Server)."
    },
    {
        question: "What is the purpose of the 'Totient' in RSA?",
        options: ["To encrypt the message", "To count numbers coprime to the modulus", "To generate the MAC address", "To compress the file"],
        answer: 1,
        explanation: "Euler's Totient function counts the positive integers less than n that are relatively prime to n. It is essential for key generation."
    },
    {
        question: "Which of the following is an example of an 'IT Risk'?",
        options: ["Flood", "Strike", "Unpatched Server", "Regulatory Fine"],
        answer: 2,
        explanation: "An Unpatched Server is a technical vulnerability requiring IT systems. The others are physical or business risks."
    },
    {
        question: "Which DNS record handles Mail Routing?",
        options: ["A Record", "CNAME", "MX Record", "NS Record"],
        answer: 2,
        explanation: "MX (Mail Exchange) records specify the mail server responsible for accepting email messages on behalf of a domain."
    },
    {
        question: "What is the 'Avalanche Effect' in cryptography?",
        options: ["A huge amount of data loss", "A small change in input causes a massive change in output", "The system crashes like an avalanche", "Keys become frozen"],
        answer: 1,
        explanation: "In strong encryption (like Feistel networks), a 1-bit change in input should change ~50% of the output bits."
    },
    {
        question: "Which law in the UK covers hacking and unauthorized access?",
        options: ["GDPR", "Computer Misuse Act (CMA) 1990", "Fraud Act", "Copyright Act"],
        answer: 1,
        explanation: "The CMA 1990 specifically criminalizes unauthorized access to computer material (hacking)."
    },
    {
        question: "What is the main function of a 'Supplicant' in 802.1x?",
        options: ["To store the database", "To request access (The User/Device)", "To block the port", "To sign certificates"],
        answer: 1,
        explanation: "The Supplicant is the device (laptop/phone) attempting to access the network."
    },
    {
        question: "In quantitative risk analysis, if ARO is 0.1, what does it mean?",
        options: ["The risk happens 10 times a year", "The risk happens once every 10 years", "The risk costs £0.1", "The risk is 10% likely"],
        answer: 1,
        explanation: "ARO (Annual Rate of Occurrence) of 0.1 means the event is expected to happen once every 10 years (1 / 10 = 0.1)."
    }
];