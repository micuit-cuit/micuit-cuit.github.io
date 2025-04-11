# 📘 Cisco Router Configuration Commands – CLI Cheat Sheet

> *Résumé des commandes les plus utilisées sur les routeurs Cisco (IOS).*

---

## 🔍 Show / Verification Commands

```bash
show version                 # Infos sur l'IOS, le modèle, etc.
show flash:                  # Infos sur la mémoire flash
show ip interface brief      # Statut et adresses IP des interfaces
show ip protocols            # Protocoles de routage configurés
show ip route                # Table de routage
show cdp neighbors           # Infos sur les appareils connectés
show cdp neighbors detail    # Détails sur les voisins CDP
show running-config          # Configuration active
show startup-config          # Config NVRAM (au démarrage)
show history                 # Historique des commandes
show tech-support            # Infos complètes pour support technique Cisco
```

---

## 📀 Sauvegarde et Suppression de Configuration

```bash
copy running-config startup-config   # Sauvegarder la config en cours
copy running-config tftp:            # Sauvegarder vers un serveur TFTP
copy tftp: running-config            # Restaurer depuis un TFTP
erase startup-config                 # Supprimer la config de démarrage
```

---

## 💼 Nom du périphérique

```bash
hostname MyRouter                    # Définir le nom du routeur
```

---

## 🔐 Sécurité de base

```bash
enable secret test1                  # Mot de passe chiffré pour "enable"

line con 0
 password strongconsolepass
 login                               # Sécuriser la console

line vty 0 4
 password strongtelnetpass
 login                               # Sécuriser l'accès Telnet

service password-encryption          # Chiffrer tous les mots de passe
```

---

## 🌐 Configuration des Interfaces

### Interfaces série

```bash
interface s0/0/0
 ip address 10.10.10.1 255.255.255.0
 clock rate 64000
 no shutdown
```

### Interfaces Ethernet

```bash
interface f0/1
 ip address 192.168.1.1 255.255.255.0
 no shutdown
```

---

## 🧽 Routage

### Routage statique

```bash
ip route 20.20.20.0 255.255.255.0 10.10.10.2        # via next hop
ip route 20.20.20.0 255.255.255.0 serial 0/0/0      # via interface
ip route 20.20.20.0 255.255.255.0 10.10.10.2 150    # avec distance admin
```

### Routage par défaut

```bash
ip route 0.0.0.0 0.0.0.0 10.10.10.2
ip route 0.0.0.0 0.0.0.0 serial 0/0/0
```

---

## 🔄 Routage Dynamique

### RIP

```bash
router rip
 version 2
 network 10.10.10.0
 no auto-summary     # optionnel
```

### EIGRP

```bash
router eigrp 10
 network 172.16.10.0 0.0.0.255
 no auto-summary
```

### OSPF

```bash
router ospf 10
 network 10.10.10.0 0.0.0.255 area 0
```

#### OSPF Authentification

* **Simple (plaintext)** :

```bash
router ospf 10
 area 0 authentication

interface s0/0/0
 ip ospf authentication-key 1234
```

* **MD5** :

```bash
router ospf 10
 area 0 authentication message-digest

interface s0/0/0
 ip ospf message-digest-key 10 md5 1234
```

---

## 🔍 Commandes de vérification des protocoles de routage

```bash
show ip route
show ip route rip
show ip eigrp neighbors
show ip eigrp interfaces
show ip eigrp topology
show ip ospf
show ip ospf interfaces
show ip ospf neighbor
show ip route ospf
```

---

## ❌ ACL – Access Control Lists

```bash
access-list 101 deny tcp 10.1.1.0 0.0.0.255 any eq 80
access-list 101 permit ip any any

interface fastEthernet 1/0
 ip access-group 101 in
```

---

## 🌐 NAT – Network Address Translation

### NAT Dynamique avec surcharge (PAT)

```bash
interface fastEthernet 1/0
 ip nat inside

interface fastEthernet 1/1
 ip nat outside

access-list 1 permit 192.168.1.0 0.0.0.255
ip nat inside source list 1 interface fastEthernet 1/1 overload
```

### NAT Statique

```bash
interface fastEthernet 1/0
 ip nat inside

interface fastEthernet 1/1
 ip nat outside

ip nat inside source static 192.168.1.1 50.1.1.1
```

---

## 🚪 Proxy ARP

```bash
interface f0/1
 ip proxy-arp                    # Active le proxy ARP sur l'interface
no ip proxy-arp                  # Désactive le proxy ARP (par défaut sur certaines interfaces)
```

