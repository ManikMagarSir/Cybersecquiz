const questionBank = [
    // ========================================================================
    // EASY QUESTIONS (Definitions, Acronyms, Basic Concepts)
    // ========================================================================
    {
        difficulty: "Easy",
        question: "What does the acronym 'CIA' stand for in information security?",
        options: ["Confidentiality, Integrity, Availability", "Control, Intelligence, Authorization", "Cyber, Internet, Access", "Central, Integrated, Automated"],
        answer: 0,
        explanation: "The CIA Triad is the foundational model of information security."
    },
    {
        difficulty: "Easy",
        question: "In the V-T-R model, what does 'V' stand for?",
        options: ["Vulnerability", "Virus", "Validation", "Vector"],
        answer: 0,
        explanation: "V stands for Vulnerability (a weakness in the system)."
    },
    {
        difficulty: "Easy",
        question: "Which term describes a flaw that is exploited before the vendor knows about it?",
        options: ["Zero-Day", "Rootkit", "Backdoor", "Trojan"],
        answer: 0,
        explanation: "A Zero-Day vulnerability has had 'zero days' to be fixed."
    },
    {
        question: "What does 'RTO' stand for?",
        difficulty: "Easy",
        options: ["Recovery Time Objective", "Real Time Operations", "Recovery Total Option", "Risk Tolerance Objective"],
        answer: 0,
        explanation: "RTO defines the target time to restore a service."
    },
    {
        question: "Which law primarily governs personal data protection in the UK?",
        difficulty: "Easy",
        options: ["GDPR / Data Protection Act 2018", "Computer Misuse Act", "Official Secrets Act", "Copyright Act"],
        answer: 0,
        explanation: "GDPR (DPA 2018) deals with personal data privacy."
    },
    {
        question: "What is 'Phishing'?",
        difficulty: "Easy",
        options: ["Sending fraudulent emails to steal data", "Scanning ports", "Encrypting files", "Intercepting Wi-Fi"],
        answer: 0,
        explanation: "Phishing is a social engineering attack via email."
    },
    {
        question: "What does 'DoS' stand for?",
        difficulty: "Easy",
        options: ["Denial of Service", "Disk Operating System", "Data over Server", "Domain of Security"],
        answer: 0,
        explanation: "DoS is an attack aimed at making a service unavailable."
    },
    {
        question: "Which of these is a physical security control?",
        difficulty: "Easy",
        options: ["Security Guard", "Firewall", "Antivirus", "Password"],
        answer: 0,
        explanation: "Guards, fences, and locks are physical controls."
    },
    {
        question: "What is the result of multiplying Asset Value by Exposure Factor?",
        difficulty: "Easy",
        options: ["Single Loss Expectancy (SLE)", "Annual Loss Expectancy (ALE)", "Annual Rate of Occurrence (ARO)", "Total Risk"],
        answer: 0,
        explanation: "SLE = AV x EF."
    },
    {
        question: "In the STRIDE model, what does 'S' stand for?",
        difficulty: "Easy",
        options: ["Spoofing", "Security", "Scanning", "Safety"],
        answer: 0,
        explanation: "Spoofing refers to impersonating another user or device."
    },
    {
        question: "What is a 'Botnet'?",
        difficulty: "Easy",
        options: ["A network of infected computers controlled by an attacker", "A secure network for robots", "A firewall feature", "A type of antivirus"],
        answer: 0,
        explanation: "Botnets are zombie armies used for DDoS and spam."
    },
    {
        question: "Which IP address is the 'Loopback' address?",
        difficulty: "Easy",
        options: ["127.0.0.1", "192.168.1.1", "8.8.8.8", "255.255.255.0"],
        answer: 0,
        explanation: "127.0.0.1 is reserved for localhost testing."
    },
    {
        question: "What does DNS stand for?",
        difficulty: "Easy",
        options: ["Domain Name System", "Digital Network Service", "Data Name Server", "Dynamic Network Storage"],
        answer: 0,
        explanation: "DNS translates domain names to IP addresses."
    },
    {
        question: "Which protocol is used for secure web browsing?",
        difficulty: "Easy",
        options: ["HTTPS", "HTTP", "FTP", "Telnet"],
        answer: 0,
        explanation: "HTTPS uses SSL/TLS to encrypt web traffic."
    },
    {
        question: "What does 'MFA' stand for?",
        difficulty: "Easy",
        options: ["Multi-Factor Authentication", "Main Factor Access", "Multiple Firewall Access", "Managed File Authorization"],
        answer: 0,
        explanation: "MFA requires more than one method of verification."
    },
    {
        question: "What is 'Ransomware'?",
        difficulty: "Easy",
        options: ["Malware that encrypts files and demands payment", "Software that steals RAM", "A tool to recover lost passwords", "A type of firewall"],
        answer: 0,
        explanation: "Ransomware holds data hostage for a fee."
    },
    {
        question: "In IPsec, what does VPN stand for?",
        difficulty: "Easy",
        options: ["Virtual Private Network", "Visual Public Network", "Verified Personal Node", "Vital Protection Net"],
        answer: 0,
        explanation: "VPN creates a secure tunnel over a public network."
    },
    {
        question: "What does 'SLA' stand for?",
        difficulty: "Easy",
        options: ["Service Level Agreement", "Security Level Access", "System Log Analysis", "Server Load Assignment"],
        answer: 0,
        explanation: "SLA is the contract defining service standards."
    },
    {
        question: "Which AAA component tracks usage?",
        difficulty: "Easy",
        options: ["Accounting", "Authorization", "Authentication", "Admin"],
        answer: 0,
        explanation: "Accounting logs what the user did."
    },
    {
        question: "What is 'Social Engineering'?",
        difficulty: "Easy",
        options: ["Hacking humans", "Building robots", "Coding social networks", "Designing office layouts"],
        answer: 0,
        explanation: "It manipulates people into divulging confidential info."
    },
    {
        question: "What is a 'Patch'?",
        difficulty: "Easy",
        options: ["A software update to fix bugs/vulnerabilities", "A cable connection", "A virus", "A password manager"],
        answer: 0,
        explanation: "Patches fix known flaws in software."
    },
    {
        question: "What does CPU stand for?",
        difficulty: "Easy",
        options: ["Central Processing Unit", "Computer Power Unit", "Central Power User", "Cyber Protection Unit"],
        answer: 0,
        explanation: "CPU is the brain of the computer."
    },
    {
        question: "Which command checks connectivity?",
        difficulty: "Easy",
        options: ["Ping", "Echo", "Touch", "Run"],
        answer: 0,
        explanation: "Ping sends ICMP packets to test reachability."
    },
    {
        question: "What is 'Malware' short for?",
        difficulty: "Easy",
        options: ["Malicious Software", "Malfunctioning Hardware", "Malevolent Wire", "Main Warehouse"],
        answer: 0,
        explanation: "Malware includes viruses, worms, and trojans."
    },
    {
        question: "In the CIA triad, 'Integrity' ensures:",
        difficulty: "Easy",
        options: ["Data is not altered", "Data is secret", "Data is accessible", "Data is deleted"],
        answer: 0,
        explanation: "Integrity means data remains unchanged and accurate."
    },

    // ========================================================================
    // MEDIUM QUESTIONS (Application, Classification, Relationships)
    // ========================================================================
    {
        question: "A flood destroys the primary data center. Activating the backup site falls under which domain?",
        difficulty: "Medium",
        options: ["Disaster Recovery (DR)", "Business Continuity Planning (BCP)", "Risk Assessment", "Compliance"],
        answer: 0,
        explanation: "DR deals with the technical restoration of IT systems (the data center)."
    },
    {
        question: "You receive an email from 'paypa1.com' asking for login details. This is an example of:",
        difficulty: "Medium",
        options: ["Typosquatting", "SQL Injection", "XSS", "Whaling"],
        answer: 0,
        explanation: "Using '1' instead of 'l' (Typosquatting) is a common phishing tactic."
    },
    {
        question: "If ARO is 0.5 and SLE is £10,000, what is the ALE?",
        difficulty: "Medium",
        options: ["£5,000", "£20,000", "£500", "£10,000"],
        answer: 0,
        explanation: "ALE = SLE x ARO = 10,000 x 0.5 = 5,000."
    },
    {
        question: "Which IPsec mode encrypts only the payload, leaving the header visible?",
        difficulty: "Medium",
        options: ["Transport Mode", "Tunnel Mode", "Ah Mode", "Promiscuous Mode"],
        answer: 0,
        explanation: "Transport mode is used for Host-to-Host communication."
    },
    {
        question: "Which STRIDE category involves a user denying they performed an action?",
        difficulty: "Medium",
        options: ["Repudiation", "Tampering", "Spoofing", "Elevation of Privilege"],
        answer: 0,
        explanation: "Repudiation is the ability to deny an action (lack of proof)."
    },
    {
        question: "What is the primary purpose of 'Salting' a password?",
        difficulty: "Medium",
        options: ["To prevent Rainbow Table attacks", "To make the password shorter", "To encrypt the database", "To speed up login"],
        answer: 0,
        explanation: "Salts ensure identical passwords have different hashes."
    },
    {
        question: "Which DNS record maps a domain name to an IPv6 address?",
        difficulty: "Medium",
        options: ["AAAA", "A", "MX", "CNAME"],
        answer: 0,
        explanation: "A is for IPv4; AAAA is for IPv6."
    },
    {
        question: "In an 802.1x network, what role does the Switch play?",
        difficulty: "Medium",
        options: ["Authenticator", "Supplicant", "Authentication Server", "Certificate Authority"],
        answer: 0,
        explanation: "The Switch is the Authenticator (the gatekeeper)."
    },
    {
        question: "Which attack involves following someone through a secure door?",
        difficulty: "Medium",
        options: ["Tailgating", "Dumpster Diving", "Shoulder Surfing", "Vishing"],
        answer: 0,
        explanation: "Tailgating bypasses physical access controls."
    },
    {
        question: "What distinguishes a 'Commodity' attack from a 'Bespoke' attack?",
        difficulty: "Medium",
        options: ["Commodity uses off-the-shelf tools; Bespoke uses custom tools", "Commodity is expensive; Bespoke is cheap", "Commodity is targeted; Bespoke is random", "There is no difference"],
        answer: 0,
        explanation: "Commodity attacks are cheap and widespread; Bespoke are custom and targeted."
    },
    {
        question: "An admin finds a file 'passwords.txt' on a user's desktop. Reading it violates which ethical principle?",
        difficulty: "Medium",
        options: ["Confidentiality", "Availability", "Integrity", "Utility"],
        answer: 0,
        explanation: "Admins should not access user data without a specific business reason."
    },
    {
        question: "Which UK law criminalizes hacking?",
        difficulty: "Medium",
        options: ["Computer Misuse Act 1990", "GDPR", "Copyright Act", "Fraud Act"],
        answer: 0,
        explanation: "CMA 1990 is the specific anti-hacking legislation."
    },
    {
        question: "What is the 'OUI' in a MAC address?",
        difficulty: "Medium",
        options: ["The Manufacturer ID", "The Device Serial Number", "The Network Class", "The Interface Type"],
        answer: 0,
        explanation: "Organizationally Unique Identifier identifies the vendor."
    },
    {
        question: "Which protocol resolves IP addresses to MAC addresses?",
        difficulty: "Medium",
        options: ["ARP", "DNS", "DHCP", "ICMP"],
        answer: 0,
        explanation: "Address Resolution Protocol (ARP) maps L3 to L2."
    },
    {
        question: "In a RACI matrix, who is the person that does the work?",
        difficulty: "Medium",
        options: ["Responsible", "Accountable", "Consulted", "Informed"],
        answer: 0,
        explanation: "R = Responsible (Doer)."
    },
    {
        question: "If a firewall rule 1 is 'Deny All', what happens to traffic?",
        difficulty: "Medium",
        options: ["It is blocked immediately", "It is checked against Rule 2", "It is allowed", "It is logged only"],
        answer: 0,
        explanation: "Firewalls stop at the first match. 'Deny All' at the top blocks everything."
    },
    {
        question: "What is 'Pretexting'?",
        difficulty: "Medium",
        options: ["Creating a fake scenario to trick a victim", "Testing code", "Scanning for viruses", "Encrypting email"],
        answer: 0,
        explanation: "Pretexting sets the stage (the lie) for social engineering."
    },
    {
        question: "Which EAP method uses certificates on both Client and Server?",
        difficulty: "Medium",
        options: ["EAP-TLS", "PEAP", "EAP-MD5", "LEAP"],
        answer: 0,
        explanation: "EAP-TLS requires mutual certificate authentication."
    },
    {
        question: "What does 'RPO' measure?",
        difficulty: "Medium",
        options: ["Acceptable Data Loss", "Acceptable Downtime", "Backup Speed", "Server Capacity"],
        answer: 0,
        explanation: "Recovery Point Objective measures data loss in time."
    },
    {
        question: "A hacker uses a dictionary to guess passwords. This is:",
        difficulty: "Medium",
        options: ["Brute Force / Dictionary Attack", "SQL Injection", "XSS", "DoS"],
        answer: 0,
        explanation: "Systematically trying words is a Dictionary Attack."
    },
    {
        question: "What is the purpose of a 'Hot Site'?",
        difficulty: "Medium",
        options: ["Immediate recovery with live data", "Cheap storage", "Office space without computers", "A burning building"],
        answer: 0,
        explanation: "Hot sites are fully mirrored and ready instantly."
    },
    {
        question: "Which concept ensures that a sender cannot deny sending a message?",
        difficulty: "Medium",
        options: ["Non-Repudiation", "Confidentiality", "Authorization", "Availability"],
        answer: 0,
        explanation: "Non-repudiation provides proof of origin."
    },
    {
        question: "What is 'Shadow IT'?",
        difficulty: "Medium",
        options: ["Unauthorized hardware/software used by employees", "Dark mode UI", "Hackers in the network", "Backup servers"],
        answer: 0,
        explanation: "Shadow IT bypasses official IT controls."
    },
    {
        question: "Which port does DNS typically use?",
        difficulty: "Medium",
        options: ["UDP 53", "TCP 80", "TCP 443", "UDP 67"],
        answer: 0,
        explanation: "DNS uses UDP 53 for queries."
    },
    {
        question: "Copying software for a friend violates:",
        difficulty: "Medium",
        options: ["Copyright Law", "Computer Misuse Act", "GDPR", "Health and Safety"],
        answer: 0,
        explanation: "Piracy is a copyright violation."
    },
    // ... (Adding 25 more Medium Questions to hit target) ...
    { difficulty: "Medium", question: "Which backup type is fastest to restore?", options: ["Full Backup", "Incremental", "Differential", "Snapshot"], answer: 0, explanation: "Full backups restore everything in one go." },
    { difficulty: "Medium", question: "What is a 'Feature' in the context of system flaws?", options: ["Intended functionality that creates a risk", "A coding error", "A virus", "A patch"], answer: 0, explanation: "Features work as designed but may introduce risk." },
    { difficulty: "Medium", question: "What is 'Vishing'?", options: ["Voice Phishing", "Video Phishing", "Viral Phishing", "VPN Phishing"], answer: 0, explanation: "Phishing over the telephone." },
    { difficulty: "Medium", question: "What does 'S' stand for in HTTPS?", options: ["Secure", "Standard", "Simple", "System"], answer: 0, explanation: "Secure (using SSL/TLS)." },
    { difficulty: "Medium", question: "Which RAID level mirrors data?", options: ["RAID 1", "RAID 0", "RAID 5", "RAID 10"], answer: 0, explanation: "RAID 1 is mirroring." },
    { difficulty: "Medium", question: "What is a 'Man-in-the-Middle' attack?", options: ["Intercepting communication between two parties", "Guessing passwords", "Crashing a server", "Stealing a laptop"], answer: 0, explanation: "Attackers sit between victims to eavesdrop." },
    { difficulty: "Medium", question: "Which risk strategy involves buying insurance?", options: ["Transfer", "Avoid", "Mitigate", "Accept"], answer: 0, explanation: "Insurance transfers the financial risk." },
    { difficulty: "Medium", question: "What is 'Whaling'?", options: ["Phishing high-profile executives", "Phishing huge files", "Phishing underwater", "Phishing entire companies"], answer: 0, explanation: "Targeting C-level execs." },
    { difficulty: "Medium", question: "In IPsec, 'ESP' stands for:", options: ["Encapsulating Security Payload", "Encrypted Service Protocol", "External Security Provider", "Electronic Serial Port"], answer: 0, explanation: "ESP provides encryption and integrity." },
    { difficulty: "Medium", question: "What is the 'Avalanche Effect'?", options: ["Small input change = Massive output change", "System crashing", "Data loss cascading", "Key expiration"], answer: 0, explanation: "Crucial for cryptographic strength." },
    { difficulty: "Medium", question: "Which key decrypts data encrypted with a Public Key?", options: ["Private Key", "Public Key", "Shared Key", "Session Key"], answer: 0, explanation: "Asymmetric keys work in pairs." },
    { difficulty: "Medium", question: "What is 'Smishing'?", options: ["SMS Phishing", "Small Phishing", "Smart Phishing", "Social Phishing"], answer: 0, explanation: "Phishing via text message." },
    { difficulty: "Medium", question: "What does 'MTD' stand for?", options: ["Maximum Tolerable Downtime", "Mean Time to Detect", "Managed Threat Defense", "Main Target Disk"], answer: 0, explanation: "The absolute limit of downtime before business failure." },
    { difficulty: "Medium", question: "Who is 'Accountable' in RACI?", options: ["The one ultimately answerable person", "The person doing the work", "The expert", "The team"], answer: 0, explanation: "The buck stops with the Accountable person." },
    { difficulty: "Medium", question: "What is 'Shoulder Surfing'?", options: ["Looking at someone's screen to steal info", "Hacking Wi-Fi", "Stealing a badge", "Tailgating"], answer: 0, explanation: "Visual spying." },
    { difficulty: "Medium", question: "Which device operates at Layer 3?", options: ["Router", "Switch", "Hub", "Repeater"], answer: 0, explanation: "Routers use IP addresses (Layer 3)." },
    { difficulty: "Medium", question: "What is 'ARP Spoofing'?", options: ["Faking MAC addresses to intercept traffic", "Faking IP addresses", "Faking DNS names", "Faking Emails"], answer: 0, explanation: "Poisoning the ARP cache." },
    { difficulty: "Medium", question: "What is 'PEAP' used for?", options: ["Secure Wi-Fi (BYOD)", "Email encryption", "File hashing", "Disk encryption"], answer: 0, explanation: "Protected EAP is common for Wi-Fi." },
    { difficulty: "Medium", question: "What does 'Symmetric Encryption' use?", options: ["One shared key", "Two different keys", "No keys", "Hashes"], answer: 0, explanation: "Same key for locking and unlocking." },
    { difficulty: "Medium", question: "What is 'Typosquatting'?", options: ["Registering misspelled domains", "Hacking keyboards", "Sitting on servers", "Stealing fonts"], answer: 0, explanation: "Fake URLs like g00gle.com." },
    { difficulty: "Medium", question: "What is a 'Cold Site'?", options: ["Space/power but no IT equipment", "Fully equipped site", "Data-only site", "Virtual site"], answer: 0, explanation: "The cheapest, slowest recovery site." },
    { difficulty: "Medium", question: "Which threat targets the 'Availability' of a system?", options: ["DDoS", "Phishing", "Spyware", "Theft"], answer: 0, explanation: "DDoS aims to stop the system working." },
    { difficulty: "Medium", question: "What is 'Hactivism'?", options: ["Hacking for political/social cause", "Hacking for money", "Hacking for fun", "Hacking by state"], answer: 0, explanation: "Ideologically motivated hacking." },
    { difficulty: "Medium", question: "What is the 'Trapdoor' in RSA?", options: ["The Factoring Problem", "The Discrete Log", "The XOR function", "The Elliptic Curve"], answer: 0, explanation: "Easy to multiply, hard to factor." },
    { difficulty: "Medium", question: "What is 'Dumpster Diving'?", options: ["Searching trash for info", "Deleting files", "Hacking databases", "Crashing servers"], answer: 0, explanation: "Physical recon." },

    // ========================================================================
    // HARD QUESTIONS (Analysis, Scenarios, Math, Architecture)
    // ========================================================================
    {
        question: "A company has an RPO of 2 hours. A crash occurs at 16:00. The last backup was at 12:00. What is the status?",
        difficulty: "Hard",
        options: ["RPO Failed: 4 hours of data lost", "RPO Met: Only 2 hours lost", "RPO Failed: Data is corrupt", "RPO Met: Recovery takes 2 hours"],
        answer: 0,
        explanation: "16:00 - 12:00 = 4 hours lost. Target was 2 hours. Policy failed."
    },
    {
        question: "You propose a control costing £50k/year. The ALE is £40k. What is the ROI?",
        difficulty: "Hard",
        options: ["Negative ROI (Loss)", "Positive ROI", "Break-even", "Unknown"],
        answer: 0,
        explanation: "Cost (£50k) > Benefit (£40k). You lose money."
    },
    {
        question: "In RSA, if an attacker derives the Totient (phi), what can they calculate?",
        difficulty: "Hard",
        options: ["The Private Key (d)", "The Public Key (e)", "The Message (m)", "The Hash"],
        answer: 0,
        explanation: "Phi(n) is the secret required to solve for d."
    },
    {
        question: "Why is IPsec Tunnel Mode incompatible with standard NAT?",
        difficulty: "Hard",
        options: ["NAT modifies headers that IPsec signs/encrypts", "Tunnel mode uses UDP", "NAT blocks port 500", "Tunnel mode is IPv6 only"],
        answer: 0,
        explanation: "NAT breaks the Integrity Check Value (ICV) of the packet."
    },
    {
        question: "A router has routes: 10.1.1.0/24 and 10.1.0.0/16. Packet dest: 10.1.1.5. Which route wins?",
        difficulty: "Hard",
        options: ["10.1.1.0/24 (Longest Match)", "10.1.0.0/16 (First Match)", "Load Balanced", "Dropped"],
        answer: 0,
        explanation: "Routers always prefer the most specific prefix (/24 > /16)."
    },
    {
        question: "In a Feistel Network, why can the Round Function (F) be irreversible?",
        difficulty: "Hard",
        options: ["The XOR/Swap structure ensures reversibility regardless of F", "It uses asymmetric keys", "Feistel is a hash, not encryption", "It is a flaw"],
        answer: 0,
        explanation: "The architectural design (L=R, R=L^F) allows standard decryption."
    },
    {
        question: "Which DNS record type handles Mail Routing?",
        difficulty: "Hard",
        options: ["MX", "A", "NS", "SOA"],
        answer: 0,
        explanation: "MX records direct email to the correct server."
    },
    {
        question: "If a firewall has 'Block All' at Rule 1, and 'Allow HTTP' at Rule 5, what happens to HTTP traffic?",
        difficulty: "Hard",
        options: ["Blocked", "Allowed", "Queued", "Inspected"],
        answer: 0,
        explanation: "Firewalls execute top-down. First match (Block) wins."
    },
    {
        question: "What is the architectural flaw in 'Microsoft Recall'?",
        difficulty: "Hard",
        options: ["Storing sensitive snapshots in plaintext/sqlite", "Using weak encryption", "Using cloud storage", "High CPU usage"],
        answer: 0,
        explanation: "Lack of encryption at rest for the database."
    },
    {
        question: "Why is EAP-TLS considered more secure than PEAP?",
        difficulty: "Hard",
        options: ["It mandates Mutual Certificate Authentication", "It uses longer passwords", "It is faster", "It uses a VPN"],
        answer: 0,
        explanation: "Both Client and Server must cryptographically prove identity."
    },
    {
        question: "An admin deletes logs to hide theft. Which two STRIDE categories apply?",
        difficulty: "Hard",
        options: ["Tampering & Repudiation", "Spoofing & DoS", "Info Disclosure & Elevation", "Tampering & Spoofing"],
        answer: 0,
        explanation: "Tampering (deleting logs) leads to Repudiation (deniability)."
    },
    {
        question: "Calculate ALE: Asset=£200k, EF=50%, ARO=0.1.",
        difficulty: "Hard",
        options: ["£10,000", "£20,000", "£100,000", "£1,000"],
        answer: 0,
        explanation: "SLE=100k. ALE = 100k * 0.1 = 10k."
    },
    {
        question: "In 802.1x, the 'Controlled Port' state is initially:",
        difficulty: "Hard",
        options: ["Unauthorized (Blocked)", "Authorized (Open)", "Monitoring", "Disabled"],
        answer: 0,
        explanation: "It starts blocked until EAP Success is received."
    },
    {
        question: "Which attack uses 'Pass-the-Hash'?",
        difficulty: "Hard",
        options: ["Lateral Movement / Elevation", "DDoS", "Phishing", "SQLi"],
        answer: 0,
        explanation: "Using captured hashes to authenticate without the password."
    },
    {
        question: "Why is 'Shadow IT' a governance risk?",
        difficulty: "Hard",
        options: ["Lack of visibility and control", "High cost", "Slow performance", "Vendor lock-in"],
        answer: 0,
        explanation: "You cannot secure what you do not know exists."
    },
    {
        question: "A 'Watering Hole' attack targets:",
        difficulty: "Hard",
        options: ["A specific group via a compromised legitimate website", "Random users via email", "The DNS server", "The Wi-Fi router"],
        answer: 0,
        explanation: "Infecting a site the target is known to visit."
    },
    {
        question: "Under the CMA, what is the difference between Section 1 and 3?",
        difficulty: "Hard",
        options: ["Sec 1 is Access; Sec 3 is Impairment/Damage", "Sec 1 is Theft; Sec 3 is Hacking", "Sec 1 is Civil; Sec 3 is Criminal", "No difference"],
        answer: 0,
        explanation: "Sec 1 = Looking. Sec 3 = Breaking/Modifying."
    },
    {
        question: "Which key signs a Digital Signature?",
        difficulty: "Hard",
        options: ["Sender's Private Key", "Sender's Public Key", "Receiver's Private Key", "Receiver's Public Key"],
        answer: 0,
        explanation: "Only the sender has their private key, proving authenticity."
    },
    {
        question: "Why does 'Tunnel Mode' hide the internal network topology?",
        difficulty: "Hard",
        options: ["It encrypts the original IP Header", "It deletes the header", "It uses MAC addresses", "It uses NAT"],
        answer: 0,
        explanation: "Encapsulating the header prevents observers seeing the true source/dest."
    },
    {
        question: "What is the primary function of the 'Totient' in RSA?",
        difficulty: "Hard",
        options: ["To derive the Private Key", "To encrypt data", "To hash data", "To speed up calculation"],
        answer: 0,
        explanation: "The Totient is the mathematical link between e and d."
    },
    {
        question: "If ARO = 2.0 and SLE = £500, what is the ALE?",
        difficulty: "Hard",
        options: ["£1,000", "£250", "£500", "£2,000"],
        answer: 0,
        explanation: "500 * 2 = 1000."
    },
    {
        question: "Which component represents the 'Risk' in V-T-R?",
        difficulty: "Hard",
        options: ["The potential loss/damage", "The hacker", "The weakness", "The patch"],
        answer: 0,
        explanation: "Risk is the intersection/consequence of Threat + Vulnerability."
    },
    {
        question: "Why is 'Zone Transfer' usually TCP?",
        difficulty: "Hard",
        options: ["Reliability for large data", "Speed", "Encryption", "It uses UDP"],
        answer: 0,
        explanation: "DNS Zone transfers are heavy; TCP ensures completeness."
    },
    {
        question: "What is the 'Shared Secret' in RADIUS used for?",
        difficulty: "Hard",
        options: ["Trust between NAS and Server", "User password", "Wi-Fi Encryption", "Database encryption"],
        answer: 0,
        explanation: "It authenticates the Switch to the RADIUS server."
    },
    {
        question: "Which attack exploits the 'Three-Way Handshake'?",
        difficulty: "Hard",
        options: ["SYN Flood", "Ping of Death", "Buffer Overflow", "SQL Injection"],
        answer: 0,
        explanation: "SYN Flood exhausts resources by leaving half-open connections."
    },
    // ... (Adding 25 more Hard Questions to hit target) ...
    { difficulty: "Hard", question: "If MTBF is 1000 hours and MTTR is 10 hours, what is Availability?", options: ["99%", "90%", "10%", "50%"], answer: 0, explanation: "Availability = MTBF / (MTBF + MTTR)." },
    { difficulty: "Hard", question: "Which ISO standard governs Business Continuity?", options: ["ISO 22301", "ISO 27001", "ISO 9001", "ISO 31000"], answer: 0, explanation: "22301 is the BC standard." },
    { difficulty: "Hard", question: "A 'Logic Bomb' is:", options: ["Malware triggered by a specific condition", "A physical explosive", "A denial of service tool", "A password cracker"], answer: 0, explanation: "Code that executes when conditions (time/event) are met." },
    { difficulty: "Hard", question: "What is 'Forward Secrecy'?", options: ["Past sessions remain secure if key is stolen", "Encrypting future data", "Hiding IP addresses", "Routing traffic forward"], answer: 0, explanation: "Compromise of long-term keys does not compromise past session keys." },
    { difficulty: "Hard", question: "Which RAID level provides striping with no redundancy?", options: ["RAID 0", "RAID 1", "RAID 5", "RAID 6"], answer: 0, explanation: "RAID 0 is fast but has 0 redundancy." },
    { difficulty: "Hard", question: "What is 'Steganography'?", options: ["Hiding data within other data", "Encrypting data", "Scrambling data", "Deleting data"], answer: 0, explanation: "Hiding existence of the message (e.g., in an image)." },
    { difficulty: "Hard", question: "Which fire suppression is safe for servers?", options: ["Gas/Clean Agent", "Water Sprinkler", "Foam", "CO2 only"], answer: 0, explanation: "Gas (like FM-200) doesn't damage electronics." },
    { difficulty: "Hard", question: "What is the 'Bell-LaPadula' model focused on?", options: ["Confidentiality", "Integrity", "Availability", "Safety"], answer: 0, explanation: "No Read Up, No Write Down (Confidentiality)." },
    { difficulty: "Hard", question: "What defines a 'Public Cloud'?", options: ["Shared infrastructure", "Single tenant", "On-premise", "No internet access"], answer: 0, explanation: "Multi-tenancy on shared hardware." },
    { difficulty: "Hard", question: "What is 'Cross-Site Scripting' (XSS)?", options: ["Injecting scripts into trusted websites", "Injecting SQL", "Crashing servers", "Phishing"], answer: 0, explanation: "Executing scripts in the victim's browser." },
    { difficulty: "Hard", question: "Which port is RDP?", options: ["3389", "443", "22", "8080"], answer: 0, explanation: "Remote Desktop Protocol uses 3389." },
    { difficulty: "Hard", question: "What is 'Non-repudiation'?", options: ["Proof of origin", "Encryption", "Hiding data", "Access control"], answer: 0, explanation: "Sender cannot deny sending." },
    { difficulty: "Hard", question: "What is a 'Root CA'?", options: ["The top-level certificate issuer", "The admin user", "The root folder", "A virus"], answer: 0, explanation: "Anchor of trust in PKI." },
    { difficulty: "Hard", question: "What is 'Entropy' in passwords?", options: ["Randomness/Strength", "Length", "Complexity", "Expiration"], answer: 0, explanation: "Measure of unpredictability." },
    { difficulty: "Hard", question: "Which attack targets the ARP cache?", options: ["ARP Poisoning", "DNS Spoofing", "DHCP Starvation", "MAC Flooding"], answer: 0, explanation: "Corrupting the IP-to-MAC map." },
    { difficulty: "Hard", question: "What is 'Data Sovereignty'?", options: ["Data subject to laws of the country it is stored in", "Data encryption", "Cloud storage", "GDPR"], answer: 0, explanation: "Legal jurisdiction over data." },
    { difficulty: "Hard", question: "What is 'Bluebugging'?", options: ["Controlling a phone via Bluetooth", "Spamming Bluetooth", "Stealing contacts", "Wi-Fi hacking"], answer: 0, explanation: "Taking control via Bluetooth." },
    { difficulty: "Hard", question: "What is 'War Driving'?", options: ["Driving around looking for Wi-Fi", "Hacking cars", "DDoS from a car", "GPS spoofing"], answer: 0, explanation: "Mapping Wi-Fi networks." },
    { difficulty: "Hard", question: "What is a 'Bastion Host'?", options: ["A hardened gateway server", "A firewall", "A backup server", "A database"], answer: 0, explanation: "Exposed server designed to withstand attacks." },
    { difficulty: "Hard", question: "What is 'Input Validation'?", options: ["Checking data before processing", "Encrypting inputs", "Hashing inputs", "Deleting inputs"], answer: 0, explanation: "Primary defense against Injection attacks." },
    { difficulty: "Hard", question: "What is 'Fuzzing'?", options: ["Sending random data to crash/test software", "Blurring images", "Encrypting code", "Cleaning logs"], answer: 0, explanation: "Automated software testing." },
    { difficulty: "Hard", question: "What is 'Polymorphic Malware'?", options: ["Malware that changes code to avoid detection", "Malware with many functions", "Encrypted malware", "Rootkits"], answer: 0, explanation: "Changes signature every time." },
    { difficulty: "Hard", question: "What is 'Session Hijacking'?", options: ["Taking over a valid user session", "Stealing passwords", "Phishing", "DDoS"], answer: 0, explanation: "Stealing the Session ID." },
    { difficulty: "Hard", question: "What is 'Clickjacking'?", options: ["Tricking users into clicking invisible buttons", "Stealing mice", "Phishing", "Ransomware"], answer: 0, explanation: "UI Redress attack." },
    { difficulty: "Hard", question: "What is 'Privilege Escalation'?", options: ["Gaining higher access rights than authorized", "Deleting accounts", "Changing passwords", "Logging in"], answer: 0, explanation: "Vertical or Horizontal movement." }
];