const questionBank = [
    // ==========================================
    // WEEK 1: FUNDAMENTALS, V-T-R, KILL CHAIN
    // ==========================================
    {
        question: "A bank's web application has a coding error that allows a user to input negative numbers for a transfer, adding money to their account. In the V-T-R model, this specific coding error is the:",
        options: ["Threat", "Risk", "Vulnerability", "Exploit"],
        answer: 2,
        explanation: "The coding error is the weakness (Vulnerability) in the system. The user exploiting it is the Threat."
    },
    {
        question: "Hackers use a 'botnet' to launch a massive traffic flood against a retailer's website, taking it offline. The 'retailer's website' represents the:",
        options: ["Threat Agent", "Asset", "Vulnerability", "Countermeasure"],
        answer: 1,
        explanation: "The Asset is what the organization is trying to protect (the website/availability)."
    },
    {
        question: "Which of the following best distinguishes a 'Flaw' from a 'Bug' (Error)?",
        options: ["A Bug is a design issue; a Flaw is a coding typo.", "A Flaw is a deeper architectural mistake; a Bug is an implementation error.", "A Bug is always exploitable; a Flaw is never exploitable.", "They are synonyms with no difference."],
        answer: 1,
        explanation: "Flaws are issues in the design (deep logic). Bugs/Errors are implementation mistakes (like a typo in code)."
    },
    {
        question: "The 'Microsoft Recall' feature stored screenshots in plain text to make the search feature fast. This is a classic example of:",
        options: ["A Coding Error", "A Feature becoming a Vulnerability", "A Buffer Overflow", "A Bespoke Attack"],
        answer: 1,
        explanation: "The functionality (taking screenshots) worked as intended (Feature), but the design choice created a security hole."
    },
    {
        question: "A cybercriminal group buys a pre-made 'Ransomware-as-a-Service' kit and sends it to 50,000 email addresses. This is classified as:",
        options: ["Targeted & Bespoke", "Untargeted & Commodity", "Targeted & Commodity", "Untargeted & Bespoke"],
        answer: 1,
        explanation: "It uses off-the-shelf tools (Commodity) and targets a mass audience without discrimination (Untargeted)."
    },
    {
        question: "Stuxnet was a worm designed specifically to destroy centrifuges in an Iranian nuclear facility using four zero-day exploits. This is classified as:",
        options: ["Commodity Attack", "Bespoke Attack", "Phishing Campaign", "Script Kiddie Attack"],
        answer: 1,
        explanation: "Bespoke attacks are highly expensive, custom-made for a specific target, and often state-sponsored."
    },
    {
        question: "In the Cyber Kill Chain, after the weapon is 'Delivered' (e.g., email sent), what must happen next for the attack to proceed?",
        options: ["Reconnaissance", "Exploitation", "Action on Objectives", "Command & Control"],
        answer: 1,
        explanation: "After Delivery, the malicious code must actually run and trigger the vulnerability (Exploitation)."
    },
    {
        question: "Which stage of the Cyber Kill Chain involves the malware 'calling home' to the attacker's server to receive instructions?",
        options: ["Installation", "Weaponization", "Command & Control (C2)", "Delivery"],
        answer: 2,
        explanation: "C2 is the channel the attacker uses to control the compromised system remotely."
    },
    {
        question: "During the 'Reconnaissance' phase, an attacker is most likely to:",
        options: ["Send a phishing email", "Browse LinkedIn to find the names of IT Admins", "Install a backdoor", "Encrypt the hard drive"],
        answer: 1,
        explanation: "Reconnaissance is the research phase (OSINT) where the attacker gathers intelligence before striking."
    },
    {
        question: "What is the primary characteristic of a 'Zero-Day' vulnerability?",
        options: ["It takes zero days to fix", "The vendor has released a patch, but you haven't applied it", "The vendor is unaware of the flaw and no patch exists", "It causes zero damage"],
        answer: 2,
        explanation: "A Zero-Day is a flaw that is exploited in the wild before the developer knows about it or has a fix."
    },

    // ==========================================
    // WEEK 2: RISK ANALYSIS & MATH
    // ==========================================
    {
        question: "You have a laptop worth £1,000. If it is stolen, you lose 100% of its value. What is the Single Loss Expectancy (SLE)?",
        options: ["£100", "£500", "£1,000", "£10,000"],
        answer: 2,
        explanation: "SLE = Asset Value (£1,000) * Exposure Factor (1.0) = £1,000."
    },
    {
        question: "A warehouse fire (EF=100%) is expected to occur once every 50 years. The building is worth £2,000,000. What is the Annual Loss Expectancy (ALE)?",
        options: ["£40,000", "£2,000,000", "£100,000", "£50,000"],
        answer: 0,
        explanation: "SLE = £2M. ARO = 1/50 = 0.02. ALE = £2M * 0.02 = £40,000."
    },
    {
        question: "A specific risk has an ALE of £10,000. You are offered a security control that costs £12,000 per year to eliminate this risk. What should you do?",
        options: ["Buy the control immediately", "Accept the risk (Do not buy)", "Buy the control only if it's a firewall", "Increase the asset value"],
        answer: 1,
        explanation: "Cost Benefit Analysis: You should not spend £12k to save £10k. The control costs more than the risk itself."
    },
    {
        question: "In the Risk Matrix, a risk is assessed as 'Possible' (Likelihood 3) and 'Significant' (Impact 4). What is the Risk Score?",
        options: ["7", "12", "1", "0.75"],
        answer: 1,
        explanation: "Risk Score = Likelihood (3) * Impact (4) = 12."
    },
    {
        question: "Which of these is an example of an 'IT Risk'?",
        options: ["A flood in the basement", "A power outage", "An SQL Injection vulnerability in the web app", "A strike by transport workers"],
        answer: 2,
        explanation: "SQL Injection targets software/data directly. Floods and power outages are Non-IT (Environmental) risks."
    },
    {
        question: "What does an ARO of 2.0 mean?",
        options: ["The risk happens once every 2 years", "The risk happens twice a year", "The risk costs £2.00", "The risk affects 2 computers"],
        answer: 1,
        explanation: "ARO (Annual Rate of Occurrence) represents frequency per year. 2.0 means twice per year."
    },
    {
        question: "Why do we perform Quantitative Risk Analysis?",
        options: ["To guess the most scary threats", "To assign financial values to risks for budget justification", "To fix the bugs in the code", "To configure the firewall"],
        answer: 1,
        explanation: "Quantitative analysis uses data/numbers (ALE, SLE) to justify security spending to management."
    },
    {
        question: "If a flood damages 40% of a server room worth £100,000, what is the Exposure Factor (EF)?",
        options: ["£40,000", "0.4", "0.6", "4.0"],
        answer: 1,
        explanation: "EF is a percentage expressed as a decimal. 40% damage = 0.4."
    },
    {
        question: "An Asset Value is £50,000. The Exposure Factor is 0.1. The ARO is 0.5. What is the ALE?",
        options: ["£2,500", "£5,000", "£25,000", "£500"],
        answer: 0,
        explanation: "SLE = 50,000 * 0.1 = 5,000. ALE = 5,000 * 0.5 = 2,500."
    },
    {
        question: "Which team usually owns 'Non-IT Risks' like fire safety or power supply?",
        options: ["The Software Development Team", "Facilities / Health & Safety", "The Help Desk", "The Network Admins"],
        answer: 1,
        explanation: "Physical and environmental risks are typically managed by Facilities or Operations, not purely IT."
    },

    // ==========================================
    // WEEK 3: BCP, DR, STRIDE
    // ==========================================
    {
        question: "What is the key difference between BCP and DR?",
        options: ["BCP is for servers; DR is for people", "BCP is for business survival; DR is for IT restoration", "BCP is cheaper than DR", "DR happens before the disaster; BCP happens after"],
        answer: 1,
        explanation: "BCP keeps the business making money (processes/people). DR gets the technology back online."
    },
    {
        question: "In the STRIDE model, 'S' stands for:",
        options: ["Security", "Spoofing", "Safety", "Scanning"],
        answer: 1,
        explanation: "S = Spoofing (Impersonation)."
    },
    {
        question: "A hacker modifies the price of an item in your shopping cart from $100 to $1. Which STRIDE threat is this?",
        options: ["Spoofing", "Tampering", "Repudiation", "Information Disclosure"],
        answer: 1,
        explanation: "Tampering involves the unauthorized modification of data (integrity violation)."
    },
    {
        question: "A user performs an action but later denies doing it. The system has no logs to prove them wrong. This is:",
        options: ["Repudiation", "Denial of Service", "Elevation of Privilege", "Spoofing"],
        answer: 0,
        explanation: "Repudiation is the ability to deny an action. Non-repudiation (logging) is the defense."
    },
    {
        question: "Which STRIDE threat corresponds to a 'Data Leak'?",
        options: ["Information Disclosure", "Tampering", "Denial of Service", "Spoofing"],
        answer: 0,
        explanation: "Information Disclosure is the exposure of data to unauthorized users (Confidentiality loss)."
    },
    {
        question: "A standard user finds a bug that lets them log in as an Administrator. This is:",
        options: ["Denial of Service", "Elevation of Privilege", "Repudiation", "Tampering"],
        answer: 1,
        explanation: "Elevation of Privilege involves gaining higher rights than authorized."
    },
    {
        question: "Which of the following is a 'Technical Control'?",
        options: ["A Firewall", "A Security Awareness Training Policy", "A Background Check", "A Door Lock"],
        answer: 0,
        explanation: "A Firewall is implemented via software/hardware. Training and Background Checks are Administrative; Locks are Physical."
    },
    {
        question: "What is the primary mitigation for 'Spoofing'?",
        options: ["Encryption", "Authentication (MFA)", "Backup", "Hashing"],
        answer: 1,
        explanation: "To stop someone faking their identity (Spoofing), you need strong Authentication."
    },
    {
        question: "What is the primary mitigation for 'Tampering'?",
        options: ["Integrity Checks (Hashing/Digital Signatures)", "Firewalls", "Disk Encryption", "Antivirus"],
        answer: 0,
        explanation: "Hashing allows you to verify if data has been changed (Tampered with)."
    },
    {
        question: "A flood destroys the office. The BCP team instructs staff to work from home. This is an example of:",
        options: ["IT Restoration", "Business Continuity Action", "Preventive Control", "Risk Acceptance"],
        answer: 1,
        explanation: "Moving staff to an alternate location to keep working is a Continuity action."
    },

    // ==========================================
    // WEEK 4: CRISIS, RACI, SLA
    // ==========================================
    {
        question: "In a RACI matrix, what does 'C' stand for?",
        options: ["Completed", "Consulted", "Corrected", "Controlled"],
        answer: 1,
        explanation: "C = Consulted. These are subject matter experts whose opinion is sought *before* a decision."
    },
    {
        question: "Why should there be only ONE 'Accountable' person per task in RACI?",
        options: ["To save paper", "To ensure clear ownership and avoid blame-shifting", "Because the software only allows one", "Because only one person can do the work"],
        answer: 1,
        explanation: "Multiple 'Accountable' people leads to confusion ('I thought you were approving it')."
    },
    {
        question: "Your RTO is 4 hours. A crash happens at 12:00 PM. When must the system be back online?",
        options: ["1:00 PM", "4:00 PM", "8:00 PM", "12:00 AM"],
        answer: 1,
        explanation: "RTO (Recovery Time Objective) is the deadline for recovery. 12:00 + 4 hours = 4:00 PM."
    },
    {
        question: "Your RPO is 1 hour. You back up at 12:00 PM. A crash happens at 12:50 PM. Are you compliant?",
        options: ["Yes, you lost 50 mins of data (less than 1 hour)", "No, you lost data", "Yes, because RPO is about downtime", "No, because the crash happened"],
        answer: 0,
        explanation: "RPO defines acceptable data loss. Losing 50 minutes is within the 1 hour limit."
    },
    {
        question: "An SLA guarantees 99.9% uptime. What happens if the provider hits only 95% uptime?",
        options: ["Nothing", "The provider usually pays a penalty or service credit", "The customer gets a full refund for the year", "The provider goes to jail"],
        answer: 1,
        explanation: "SLAs are contracts. Failing metrics usually results in financial penalties or credits."
    },
    {
        question: "Who is the 'Informed' party in a RACI matrix?",
        options: ["The person doing the work", "The person who needs to know the outcome after it's done", "The boss who approves it", "The expert giving advice"],
        answer: 1,
        explanation: "Informed (I) parties are updated on progress but do not vote or do the work."
    },
    {
        question: "If the 'Responsible' person fails to do the job, who gets in trouble with the CEO?",
        options: ["The Consulted person", "The Accountable person", "The Informed person", "The HR department"],
        answer: 1,
        explanation: "The Accountable person is ultimately answerable for the success or failure of the task."
    },
    {
        question: "Which document typically outlines the penalties for downtime?",
        options: ["The RACI Matrix", "The SLA (Service Level Agreement)", "The BCP", "The Risk Register"],
        answer: 1,
        explanation: "The SLA contains the performance promises and the consequences of breaking them."
    },
    {
        question: "A company chooses a manual tape backup system that takes 24 hours to restore. Their RTO is 4 hours. Is this a valid strategy?",
        options: ["Yes, it is cheap", "No, the solution cannot meet the RTO requirement", "Yes, if the tape is high quality", "No, because tapes are old technology"],
        answer: 1,
        explanation: "The technical solution must be fast enough to meet the business constraint (RTO). 24h restore > 4h goal = Fail."
    },
    {
        question: "The 'Cost of Downtime' includes:",
        options: ["Only the IT repair bill", "Lost revenue, reputational damage, and idle staff costs", "The cost of the new server", "The electricity bill"],
        answer: 1,
        explanation: "Downtime costs are broad: missed sales, brand damage, and paying staff who cannot work."
    },

    // ==========================================
    // WEEK 5: SOCIAL ENGINEERING
    // ==========================================
    {
        question: "An attacker creates a fake story about being a vendor who lost their invoice to get an employee to download a file. This story is called:",
        options: ["The Hook", "The Pretext", "The Exploit", "The Payload"],
        answer: 1,
        explanation: "Pretexting is the act of creating a fabricated scenario to engage the victim."
    },
    {
        question: "What is 'Vishing'?",
        options: ["Video Phishing", "Voice Phishing (over the phone)", "Virtual Phishing", "Very fast Phishing"],
        answer: 1,
        explanation: "Vishing stands for Voice Phishing."
    },
    {
        question: "Which attack involves following an authorized person through a secure door without using a badge?",
        options: ["Tailgating / Piggybacking", "Shoulder Surfing", "Dumpster Diving", "Whaling"],
        answer: 0,
        explanation: "Tailgating exploits the social norm of holding doors open for others."
    },
    {
        question: "An email says 'URGENT: Your account will be deleted in 10 minutes unless you verify password'. Which psychological trigger is used?",
        options: ["Reciprocity", "Fear & Urgency", "Social Proof", "Likability"],
        answer: 1,
        explanation: "The attacker wants to induce panic (Fear) so the victim acts without thinking (Urgency)."
    },
    {
        question: "What is 'Smishing'?",
        options: ["Small Phishing", "SMS Phishing (Text Message)", "Smart Phishing", "Social Media Phishing"],
        answer: 1,
        explanation: "Smishing stands for SMS Phishing."
    },
    {
        question: "An attacker watches you type your PIN at an ATM or keyboard. This is:",
        options: ["Tailgating", "Shoulder Surfing", "Eavesdropping", "Sniffing"],
        answer: 1,
        explanation: "Shoulder surfing is visually observing credentials being entered."
    },
    {
        question: "Why is 'OSINT' (Open Source Intelligence) used in social engineering?",
        options: ["To hack the firewall", "To gather public information about a target to make the pretext believable", "To decrypt passwords", "To launch DDoS attacks"],
        answer: 1,
        explanation: "Attackers look at LinkedIn/Facebook to find names, roles, and interests to make their lies (pretext) convincing."
    },
    {
        question: "Which of these is a hallmark of a phishing email?",
        options: ["Personalized greeting using your full name", "Generic greetings ('Dear User'), urgency, and mismatched URLs", "Expected attachment from a known colleague", "Correct grammar and spelling"],
        answer: 1,
        explanation: "Generic greetings and urgency are classic signs of mass-market phishing."
    },
    {
        question: "Kevin Mitnick's philosophy on Social Engineering was:",
        options: ["Always use a zero-day exploit", "Information is the currency; why crack a password when you can ask for it?", "Always attack the firewall first", "Physical access is impossible"],
        answer: 1,
        explanation: "He famously argued that the human element is the weakest link."
    },
    {
        question: "What is 'Whaling'?",
        options: ["Phishing for very large files", "Targeting high-profile executives (CEOs/CFOs)", "A denial of service attack", "Phishing underwater"],
        answer: 1,
        explanation: "Whaling is a specific type of Spear Phishing targeting the 'big fish' (executives)."
    },

    // ==========================================
    // WEEK 6: CRYPTOGRAPHY
    // ==========================================
    {
        question: "In the Feistel Network structure, which operation is primarily used to combine the Function output with the data?",
        options: ["AND", "OR", "XOR", "NOT"],
        answer: 2,
        explanation: "XOR (Exclusive OR) is used because it is reversible (A XOR B = C, and C XOR B = A)."
    },
    {
        question: "Why does RSA use two large prime numbers?",
        options: ["They are easy to remember", "Multiplying them is easy, but factoring the product back into primes is computationally hard", "They allow faster encryption than AES", "They take up less space"],
        answer: 1,
        explanation: "The security of RSA relies on the Factoring Problem—it is hard to reverse the multiplication of large primes."
    },
    {
        question: "In an RSA Key Pair, if you encrypt with the Public Key, you must decrypt with:",
        options: ["The Public Key", "The Private Key", "The Session Key", "The Hash"],
        answer: 1,
        explanation: "Asymmetric encryption works in pairs. Public locks it; Private unlocks it."
    },
    {
        question: "Which RSA component allows for 'Digital Signatures'?",
        options: ["Encrypting with the Receiver's Public Key", "Encrypting the hash with the Sender's Private Key", "Hashing the message only", "Using a shared password"],
        answer: 1,
        explanation: "Signing proves identity. Only the sender has their Private Key, so if it unlocks with their Public Key, it proves they sent it."
    },
    {
        question: "If an attacker discovers 'phi(n)' (The Totient) in RSA, what can they do?",
        options: ["Calculate the Private Key (d)", "Nothing, it is useless", "Slow down the server", "Calculate the Public Key (e)"],
        answer: 0,
        explanation: "Phi(n) is the secret trapdoor used to derive the private key. It must never be shared."
    },
    {
        question: "What is the 'Avalanche Effect'?",
        options: ["When a system crashes due to load", "A small change in input (plaintext) results in a massive change in output (ciphertext)", "When keys are lost forever", "A type of virus"],
        answer: 1,
        explanation: "A good encryption algorithm changes ~50% of the output bits if just 1 bit of input changes."
    },
    {
        question: "Is the function 'F' in a Feistel network required to be reversible?",
        options: ["Yes, otherwise we can't decrypt", "No, the Feistel structure itself handles the reversibility", "Yes, but only for DES", "No, because we never decrypt data"],
        answer: 1,
        explanation: "This is a key feature of Feistel. The function F can be one-way, but the XOR/Swap structure makes the whole process reversible."
    },
    {
        question: "Which key is shared openly with everyone in RSA?",
        options: ["Private Key", "Public Key", "Totient", "Prime p"],
        answer: 1,
        explanation: "The Public Key is designed to be public (like a mailbox slot)."
    },
    {
        question: "Which formula represents the calculation of the Modulus (n)?",
        options: ["n = p + q", "n = p * q", "n = p / q", "n = p^q"],
        answer: 1,
        explanation: "The modulus n is the product of two large primes p and q."
    },
    {
        question: "Why is Symmetric encryption (like AES) generally used for the actual data transfer instead of Asymmetric (RSA)?",
        options: ["Symmetric is much faster", "Symmetric is more secure", "Asymmetric cannot encrypt data", "Symmetric uses longer keys"],
        answer: 0,
        explanation: "Asymmetric is very slow (math-heavy). We use Asymmetric to exchange a key, then Symmetric (fast) for the bulk data."
    },

    // ==========================================
    // WEEK 7: IP, DNS, ROUTING
    // ==========================================
    {
        question: "Which Class of IP address starts with the binary bits '110'?",
        options: ["Class A", "Class B", "Class C", "Class D"],
        answer: 2,
        explanation: "Class C addresses range from 192-223. 192 in binary starts with 110."
    },
    {
        question: "What is the loopback address used for?",
        options: ["Routing to the internet", "Testing the local network stack (Self-test)", "Broadcasting to all nodes", "Assigning to the Gateway"],
        answer: 1,
        explanation: "127.0.0.1 (Loopback) sends traffic back to the device itself to test if TCP/IP is working."
    },
    {
        question: "In the address 192.168.1.0/24, what does '/24' indicate?",
        options: ["The first 24 bits identify the Network", "The first 24 bits identify the Host", "There are 24 hosts available", "It is a Class A network"],
        answer: 0,
        explanation: "CIDR notation /24 means the Network Mask is 24 bits long (255.255.255.0)."
    },
    {
        question: "Which DNS record maps a Domain Name to an IPv4 Address?",
        options: ["MX", "A", "AAAA", "CNAME"],
        answer: 1,
        explanation: "The 'A' record is for IPv4. 'AAAA' is for IPv6."
    },
    {
        question: "What does the first 3 bytes (24 bits) of a MAC address identify?",
        options: ["The specific device ID", "The OUI (Manufacturer/Vendor)", "The IP address", "The network speed"],
        answer: 1,
        explanation: "The Organizationally Unique Identifier (OUI) tells you who made the card (e.g., Apple, Dell)."
    },
    {
        question: "Which protocol is used to find the MAC address if you only know the IP address?",
        options: ["DNS", "DHCP", "ARP", "ICMP"],
        answer: 2,
        explanation: "ARP (Address Resolution Protocol) resolves IP addresses to MAC addresses."
    },
    {
        question: "When a router looks at a packet to decide where to send it, which field does it check?",
        options: ["Source IP", "Destination IP", "Source MAC", "Payload Data"],
        answer: 1,
        explanation: "Routing decisions are based on where the packet is going (Destination IP)."
    },
    {
        question: "What is the purpose of the 'MX' record in DNS?",
        options: ["It points to the Web Server", "It points to the Mail Server", "It is an alias", "It stores text"],
        answer: 1,
        explanation: "MX stands for Mail Exchange."
    },
    {
        question: "If 'ping 8.8.8.8' works but 'ping google.com' fails, what is the issue?",
        options: ["The Internet connection", "The DNS Resolution", "The Router", "The Switch"],
        answer: 1,
        explanation: "You can reach the internet (IP works), but you can't translate the name. This is a DNS failure."
    },
    {
        question: "A 'Broadcast' packet is sent to:",
        options: ["The Gateway only", "One specific host", "All hosts on the local network", "The internet"],
        answer: 2,
        explanation: "Broadcasts (like ARP requests) are meant for everyone on the local subnet."
    },

    // ==========================================
    // WEEK 8: AAA, 802.1X, IPSEC
    // ==========================================
    {
        question: "Which component of AAA determines 'What you can do'?",
        options: ["Authentication", "Authorization", "Accounting", "Administration"],
        answer: 1,
        explanation: "Authorization checks permissions (e.g., VLAN assignment, file access)."
    },
    {
        question: "In an 802.1x network, what is the 'Authenticator'?",
        options: ["The User's Laptop", "The Switch or Wireless Access Point", "The RADIUS Server", "The Database"],
        answer: 1,
        explanation: "The Switch acts as the gatekeeper (Authenticator/NAS). It blocks the port until the Server says yes."
    },
    {
        question: "Which EAP method offers the highest security by requiring certificates on both Client and Server?",
        options: ["EAP-MD5", "PEAP", "EAP-TLS", "LEAP"],
        answer: 2,
        explanation: "EAP-TLS uses Mutual Authentication via certificates. It is the gold standard for security."
    },
    {
        question: "Why is PEAP often preferred over EAP-TLS for BYOD environments?",
        options: ["It is more secure", "It doesn't require installing certificates on every user's phone", "It doesn't require a server", "It works without passwords"],
        answer: 1,
        explanation: "PEAP creates a secure tunnel using only a server-side cert, avoiding the headache of managing client certs."
    },
    {
        question: "Which IPsec mode encrypts the ENTIRE packet (including the original IP header) and adds a new header?",
        options: ["Transport Mode", "Tunnel Mode", "Ah Mode", "ESP Mode"],
        answer: 1,
        explanation: "Tunnel Mode wraps the whole packet. It is used for VPNs over the internet to hide the internal topology."
    },
    {
        question: "What is the role of the RADIUS protocol?",
        options: ["To encrypt the data", "To communicate between the Switch (NAS) and the Authentication Server", "To route packets to the internet", "To assign IP addresses"],
        answer: 1,
        explanation: "RADIUS is the language spoken between the Authenticator and the Auth Server."
    },
    {
        question: "If you add a new Switch to your network, what must you do on the RADIUS server?",
        options: ["Nothing, it works automatically", "Add the Switch's IP as a trusted RADIUS Client", "Reboot the server", "Install a certificate on the switch"],
        answer: 1,
        explanation: "The RADIUS server only accepts requests from trusted clients (switches) defined in its configuration."
    },
    {
        question: "Which protocol in IPsec provides Encryption (Confidentiality)?",
        options: ["AH (Authentication Header)", "ESP (Encapsulating Security Payload)", "IKE", "ISAKMP"],
        answer: 1,
        explanation: "AH only provides integrity. ESP provides encryption AND integrity."
    },
    {
        question: "Before 802.1x authentication is complete, the switch port is in a 'Blocked' state. What traffic is allowed?",
        options: ["All traffic", "HTTP and HTTPS", "Only EAPOL (EAP over LAN)", "No traffic at all"],
        answer: 2,
        explanation: "The port allows just enough traffic (EAPOL) to perform the login handshake."
    },
    {
        question: "Transport Mode in IPsec is typically used for:",
        options: ["Site-to-Site VPNs", "End-to-End (Host-to-Host) communication within a network", "Connecting remote offices", "Hiding IP addresses"],
        answer: 1,
        explanation: "Transport mode encrypts only the payload, keeping the headers visible. Good for internal server-to-server security."
    },

    // ==========================================
    // LAW & ETHICS (UK)
    // ==========================================
    {
        question: "Which UK law criminalizes unauthorized access to computer material (Hacking)?",
        options: ["Data Protection Act 2018", "Computer Misuse Act 1990", "Copyright Act 1988", "Fraud Act 2006"],
        answer: 1,
        explanation: "CMA 1990 is the primary anti-hacking law."
    },
    {
        question: "A student copies a licensed piece of software to a DVD and gives it to a friend. This violates:",
        options: ["Computer Misuse Act", "Copyright, Designs and Patents Act 1988", "GDPR", "Investigatory Powers Act"],
        answer: 1,
        explanation: "This is software piracy (Intellectual Property theft), covered by Copyright law."
    },
    {
        question: "An IT admin reads the CEO's personal emails while fixing their laptop. Is this illegal?",
        options: ["No, IT admins have full rights", "Yes, it likely violates the Computer Misuse Act (unauthorized access to data)", "No, as long as they don't tell anyone", "Yes, it violates GDPR only"],
        answer: 1,
        explanation: "Even with physical access, using privileges to access data you are not authorized to see for that purpose is a crime."
    },
    {
        question: "Which law covers the 'Right to be Forgotten' and personal data handling?",
        options: ["Computer Misuse Act", "Data Protection Act 2018 (GDPR)", "Official Secrets Act", "Fraud Act"],
        answer: 1,
        explanation: "GDPR (implemented via DPA 2018 in UK) governs personal data rights."
    },
    {
        question: "Sending offensive or menacing messages over a public electronic network is an offense under:",
        options: ["Malicious Communications Act / Communications Act", "Computer Misuse Act", "Copyright Act", "Official Secrets Act"],
        answer: 0,
        explanation: "These acts cover cyber-bullying and trolling via electronic means."
    },

    // ==========================================
    // MIXED / ADVANCED SCENARIOS
    // ==========================================
    {
        question: "A firewall encounters a packet. Rule 1 says 'Block All'. Rule 5 says 'Allow HTTP'. What happens?",
        options: ["Packet is allowed", "Packet is blocked", "Packet is quarantined", "Firewall asks the admin"],
        answer: 1,
        explanation: "Firewalls process top-down. The first match wins. If Rule 1 blocks it, Rule 5 is never checked."
    },
    {
        question: "In a 2-Party authentication model (like Home Wi-Fi), where is the password verified?",
        options: ["On a central RADIUS server", "On the Access Point itself", "On the Internet", "On the Laptop"],
        answer: 1,
        explanation: "2-Party means Client <-> AP. The AP holds the Pre-Shared Key (PSK)."
    },
    {
        question: "If you need to hide the internal network topology from the public internet, which IPsec mode must you use?",
        options: ["Transport Mode", "Tunnel Mode", "Transparent Mode", "Bridge Mode"],
        answer: 1,
        explanation: "Tunnel mode wraps the original IP packet in a new one, hiding the internal source/destination IPs."
    },
    {
        question: "Which tool would you use to trace the path a packet takes across the internet?",
        options: ["Ping", "Tracert / Traceroute", "Ipconfig", "Netstat"],
        answer: 1,
        explanation: "Tracert shows every router (hop) between you and the destination."
    },
    {
        question: "What is the main security risk of using EAP-MD5?",
        options: ["It is too slow", "It does not support Mutual Authentication (Server doesn't prove ID)", "It uses too much bandwidth", "It requires certificates"],
        answer: 1,
        explanation: "EAP-MD5 only authenticates the client. A fake rogue AP could capture the client's credentials."
    },
    {
        question: "If a Business Continuity Plan (BCP) focuses on 'Survival', what does Disaster Recovery (DR) focus on?",
        options: ["Prevention", "Technical Restoration", "Profit", "Marketing"],
        answer: 1,
        explanation: "DR is the technical subset of BCP focused on getting servers and data back online."
    },
    {
        question: "Why is 'Shadow IT' (employees using unauthorized software) a risk?",
        options: ["It costs too much money", "It bypasses organizational security controls and visibility", "It is faster than IT", "It uses too much electricity"],
        answer: 1,
        explanation: "If IT doesn't know about it, they can't secure, patch, or monitor it."
    },
    {
        question: "What is the purpose of 'Loopback Testing'?",
        options: ["To hack a neighbor", "To test if the network card driver and TCP/IP stack are working", "To find the router IP", "To speed up the internet"],
        answer: 1,
        explanation: "Pinging 127.0.0.1 confirms your own computer's networking software is functional."
    },
    {
        question: "In a 'Man-in-the-Middle' attack, the attacker often uses which technique to intercept local traffic?",
        options: ["SQL Injection", "ARP Spoofing", "Phishing", "Ransomware"],
        answer: 1,
        explanation: "ARP Spoofing allows the attacker to tell the victim 'I am the Router', causing traffic to flow through the attacker."
    },
    {
        question: "If a risk has a high impact but a very low likelihood, how do organizations typically handle it?",
        options: ["Ignore it", "Transfer it (Insurance)", "Mitigate it with expensive controls", "Accept it completely"],
        answer: 1,
        explanation: "High Impact/Low Probability risks (like fires/earthquakes) are usually Transferred via Insurance."
    }
];