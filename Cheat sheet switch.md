# 📘 Cisco Switch Configuration Commands – CLI Cheat Sheet

> *Résumé des commandes les plus utilisées sur les switches Cisco (IOS).*

---

## 🔍 Show / Verification Commands

```bash
show version                    # Infos sur l'IOS, le modèle, etc.
show flash:                     # Infos sur la mémoire flash
show running-config             # Configuration active
show startup-config             # Config au démarrage
show interfaces status          # Statut des ports (vitesse, duplex, etc.)
show interfaces                # Détails sur les interfaces
show mac address-table          # Table d'adresses MAC
show vlan brief                 # Infos VLANs configurés
show vtp status                 # Statut du protocole VTP
show spanning-tree              # Infos spanning-tree (STP)
show port-security              # Infos sur la sécurité des ports
show cdp neighbors              # Appareils voisins
show cdp neighbors detail       # Détails sur les voisins CDP
```

---

## 📀 Sauvegarde et Suppression de Configuration

```bash
copy running-config startup-config   # Sauvegarder la config en cours
copy running-config tftp:            # Sauvegarder vers un serveur TFTP
copy tftp: running-config            # Restaurer depuis un TFTP
erase startup-config                 # Supprimer la config de démarrage
reload                               # Redémarrer le switch
```

---

## 💼 Nom du Switch et Accès

```bash
hostname Switch1                     # Nom du switch

interface vlan 1
 ip address 192.168.1.2 255.255.255.0
 no shutdown                         # Activer l'interface

ip default-gateway 192.168.1.1       # Passerelle par défaut pour gestion
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

## 🚪 Port Security

```bash
interface fastEthernet 0/1
 switchport mode access
 switchport port-security
 switchport port-security maximum 2
 switchport port-security violation restrict
 switchport port-security mac-address sticky
```

---

## 📂 VLAN Configuration

```bash
vlan 10
 name SALES
exit

interface fastEthernet 0/1
 switchport mode access
 switchport access vlan 10
```

---

## 🌐 Trunking et VTP

```bash
interface fastEthernet 0/24
 switchport mode trunk
 switchport trunk allowed vlan 10,20,30
```

### VTP Configuration

```bash
vtp mode server
vtp domain monreseau
vtp password vtpsecret
```

---

## ⚡ Spanning Tree

```bash
spanning-tree mode rapid-pvst        # Mode STP rapide

interface fastEthernet 0/1
 spanning-tree portfast              # Accélérer la mise en ligne (host)
 spanning-tree bpduguard enable     # Protection contre les BPDU
```

---

## 🔍 Commandes Diverses

```bash
description "Connexion vers serveur"
```

---