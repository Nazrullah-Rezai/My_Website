# EmailJS Setup Anleitung

## Schritt 1: EmailJS Account erstellen
1. Gehe zu https://www.emailjs.com/
2. Registriere dich mit deiner Email (z.B. nasrollah.rzi@gmail.com)
3. Bestätige deine Email

## Schritt 2: Service erstellen
1. Dashboard → "Email Services"
2. Klicke "Add Service"
3. Wähle "Gmail"
4. Authentifiziere deine nasrollah.rzi@gmail.com Gmail
5. Kopiere die Service ID (z.B. service_xxxxx)

## Schritt 3: Template erstellen
1. Dashboard → "Email Templates"
2. Klicke "Create New Template"
3. Verwende diese Variablen:
   ```
   From: {{from_email}}
   Name: {{from_name}}
   Phone: {{phone}}
   
   {{message}}
   ```
4. Kopiere die Template ID (z.B. template_xxxxx)

## Schritt 4: Public Key kopieren
1. Dashboard → "Integration"
2. Kopiere "Public Key" (z.B. key_public_xxxxx)

## Schritt 5: Keys in emailService.js eintragen
Ersetze diese Zeilen in `src/services/emailService.js`:
```javascript
const PUBLIC_KEY = "HIER_DEIN_PUBLIC_KEY";
const SERVICE_ID = "HIER_DEIN_SERVICE_ID";
const TEMPLATE_ID = "HIER_DEIN_TEMPLATE_ID";
```

## Fertig! ✅
Die Contact Form funktioniert jetzt!
