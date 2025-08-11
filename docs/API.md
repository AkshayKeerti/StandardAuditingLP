### Project API Reference

This document catalogs all public React components and utilities exposed by this project, along with props, callbacks, and usage examples.


## Components

### Header (`src/components/Header.js`)
- **Description**: Top navigation/header with contact shortcuts.
- **Props**: None
- **Usage**:
```jsx
import Header from './components/Header';

export default function Page() {
  return <Header />;
}
```

### Hero (`src/components/Hero.js`)
- **Description**: Landing hero section with benefits and an embedded lead form. Also shows a `ContactPopup` on inactivity.
- **Props**: None
- **Usage**:
```jsx
import Hero from './components/Hero';

export default function Page() {
  return <Hero />;
}
```

### PricingPackages (`src/components/PricingPackages.js`)
- **Description**: Displays available pricing packages and emits selection.
- **Props**:
  - **onPackageSelect**: function (required)
    - Called with a string value identifying the selected package.
    - Possible values: `"corporate-tax-filing"`, `"corporate-tax-filing-payable"`.
- **Usage**:
```jsx
import { useState } from 'react';
import PricingPackages from './components/PricingPackages';
import LeadFormSection from './components/LeadFormSection';

export default function Page() {
  const [selectedPackage, setSelectedPackage] = useState('');
  return (
    <>
      <PricingPackages onPackageSelect={setSelectedPackage} />
      <LeadFormSection selectedPackage={selectedPackage} />
    </>
  );
}
```

### ListedAuditors (`src/components/ListedAuditors.js`)
- **Description**: Grid of UAE authorities where the company is listed.
- **Props**: None
- **Usage**:
```jsx
import ListedAuditors from './components/ListedAuditors';

export default function Page() {
  return <ListedAuditors />;
}
```

### GovernmentAgencies (`src/components/GovernmentAgencies.js`)
- **Description**: Grid of partner government agencies with logos.
- **Props**: None
- **Usage**:
```jsx
import GovernmentAgencies from './components/GovernmentAgencies';

export default function Page() {
  return <GovernmentAgencies />;
}
```

### ClientLogos (`src/components/ClientLogos.js`)
- **Description**: Client logos and partnership benefits.
- **Props**: None
- **Usage**:
```jsx
import ClientLogos from './components/ClientLogos';

export default function Page() {
  return <ClientLogos />;
}
```

### CertificationsTrust (`src/components/CertificationsTrust.js`)
- **Description**: Certifications, who we help, and promise cards.
- **Props**: None
- **Usage**:
```jsx
import CertificationsTrust from './components/CertificationsTrust';

export default function Page() {
  return <CertificationsTrust />;
}
```

### RealBusinessImpact (`src/components/RealBusinessImpact.js`)
- **Description**: Process steps and certifications/trust section.
- **Props**: None
- **Usage**:
```jsx
import RealBusinessImpact from './components/RealBusinessImpact';

export default function Page() {
  return <RealBusinessImpact />;
}
```

### Testimonials (`src/components/Testimonials.js`)
- **Description**: Auto-rotating testimonials carousel with client logos and trust indicators.
- **Props**: None
- **Usage**:
```jsx
import Testimonials from './components/Testimonials';

export default function Page() {
  return <Testimonials />;
}
```

### Services (`src/components/Services.js`)
- **Description**: Services grid, process steps, and call-to-action.
- **Props**: None
- **Usage**:
```jsx
import Services from './components/Services';

export default function Page() {
  return <Services />;
}
```

### WhoWeHelp (`src/components/WhoWeHelp.js`)
- **Description**: Target audience segments and a CTA card.
- **Props**: None
- **Usage**:
```jsx
import WhoWeHelp from './components/WhoWeHelp';

export default function Page() {
  return <WhoWeHelp />;
}
```

### AboutUs (`src/components/AboutUs.js`)
- **Description**: Company stats section.
- **Props**: None
- **Usage**:
```jsx
import AboutUs from './components/AboutUs';

export default function Page() {
  return <AboutUs />;
}
```

### BusinessDescription (`src/components/BusinessDescription.js`)
- **Description**: Narrative explaining the tax landscape and core services.
- **Props**: None
- **Usage**:
```jsx
import BusinessDescription from './components/BusinessDescription';

export default function Page() {
  return <BusinessDescription />;
}
```

### FAQ (`src/components/FAQ.js`)
- **Description**: Expandable FAQ list.
- **Props**: None
- **Usage**:
```jsx
import FAQ from './components/FAQ';

export default function Page() {
  return <FAQ />;
}
```

### Footer (`src/components/Footer.js`)
- **Description**: Footer with contact info, quick links, and social links.
- **Props**: None
- **Usage**:
```jsx
import Footer from './components/Footer';

export default function Page() {
  return <Footer />;
}
```

### FloatingContact (`src/components/FloatingContact.js`)
- **Description**: Floating contact shortcut button.
- **Props**: None
- **Usage**:
```jsx
import FloatingContact from './components/FloatingContact';

export default function Page() {
  return (
    <>
      {/* page content */}
      <FloatingContact />
    </>
  );
}
```

### ContactForm (`src/components/ContactForm.js`)
- **Description**: Full-page contact form backed by `GoogleFormHandler`.
- **Props**: None (internal stateful form)
- **Usage**:
```jsx
import ContactForm from './components/ContactForm';

export default function Page() {
  return <ContactForm />;
}
```

### LeadFormSection (`src/components/LeadFormSection.js`)
- **Description**: Lead capture form intended to work with `PricingPackages` selection.
- **Props**:
  - **selectedPackage**: string (optional)
    - Pre-selects the service dropdown. Values should match `PricingPackages` values:
      - `"corporate-tax-filing"`
      - `"corporate-tax-filing-payable"`
- **Usage**:
```jsx
import LeadFormSection from './components/LeadFormSection';

export default function Page() {
  return <LeadFormSection selectedPackage="corporate-tax-filing" />;
}
```

### ContactPopup (`src/components/ContactPopup.js`)
- **Description**: Modal popup to quickly collect a phone number. Uses `GoogleFormHandler` internally.
- **Props**:
  - **isOpen**: boolean (required)
  - **onClose**: function (required) – invoked to close the popup
  - **onSubmit**: function (optional) – called as `onSubmit(phoneNumber: string)` after successful submit
- **Usage**:
```jsx
import { useState } from 'react';
import ContactPopup from './components/ContactPopup';

export default function Page() {
  const [open, setOpen] = useState(false);
  const handleSubmit = (phone) => {
    console.log('Submitted phone:', phone);
  };
  return (
    <>
      <button onClick={() => setOpen(true)}>Open</button>
      <ContactPopup isOpen={open} onClose={() => setOpen(false)} onSubmit={handleSubmit} />
    </>
  );
}
```

### GoogleFormHandler (`src/components/GoogleFormHandler.js`)
- **Description**: Form wrapper that validates and submits `formData` to Google Forms using the utilities in `src/utils/googleFormSubmit.js`. Renders messages and a loading state.
- **Props**:
  - **children**: ReactNode (required) – your form fields and submit button
  - **formData**: object (required) – should contain any of `name`, `phone`, `email`, `service`
  - **onSuccess**: function (optional) – called as `onSuccess(formData)` on success
  - **onError**: function (optional) – called as `onError(errors: string[])`
  - **showSuccessMessage**: boolean (optional, default: true)
  - **showErrorMessage**: boolean (optional, default: true)
- **Usage**:
```jsx
import { useState } from 'react';
import GoogleFormHandler from './components/GoogleFormHandler';

export default function MinimalForm() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', service: '' });

  return (
    <GoogleFormHandler
      formData={formData}
      onSuccess={() => setFormData({ name: '', phone: '', email: '', service: '' })}
    >
      <input value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
      <input value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
      <input value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
      <select value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })}>
        <option value="">Select a service</option>
        <option value="corporate-tax-filing">Corporate Tax (Filing only)</option>
        <option value="corporate-tax-filing-payable">Corporate Tax (Filing + Tax Payable)</option>
      </select>
      <button type="submit">Submit</button>
    </GoogleFormHandler>
  );
}
```


## Utilities

### submitToGoogleForm (`src/utils/googleFormSubmit.js`)
- **Description**: Submits form data to a Google Form endpoint using `fetch` in `no-cors` mode.
- **Signature**: `submitToGoogleForm(formData: { name?: string; phone?: string; email?: string; service?: string }): Promise<{ success: boolean; message: string }>`
- **Behavior**:
  - Maps `service` to the form’s display labels when needed.
  - Returns a success message on likely success (response body is opaque due to `no-cors`).
- **Example**:
```js
import { submitToGoogleForm } from './src/utils/googleFormSubmit';

async function run() {
  const result = await submitToGoogleForm({
    name: 'Jane Doe',
    phone: '+971501234567',
    email: 'jane@example.com',
    service: 'corporate-tax-filing'
  });
  console.log(result.success, result.message);
}
```

### validateFormData (`src/utils/googleFormSubmit.js`)
- **Description**: Validates `name`, `phone`, and `email` fields with basic rules.
- **Signature**: `validateFormData(formData: Record<string, any>): { isValid: boolean; errors: string[] }`
- **Rules**:
  - `name` (if provided): at least 2 characters
  - `phone` (if provided): at least 8 characters
  - `email` (if provided): must match a basic email pattern
- **Example**:
```js
import { validateFormData } from './src/utils/googleFormSubmit';

const { isValid, errors } = validateFormData({ name: 'A', phone: '123', email: 'bad@' });
if (!isValid) {
  console.warn(errors);
}
```


## Common Patterns

- **Connect pricing to lead form**:
```jsx
const [selectedPackage, setSelectedPackage] = useState('');
<PricingPackages onPackageSelect={setSelectedPackage} />
<LeadFormSection selectedPackage={selectedPackage} />
```

- **Show the contact popup and react to submission**:
```jsx
const [open, setOpen] = useState(false);
<ContactPopup isOpen={open} onClose={() => setOpen(false)} onSubmit={(phone) => {/* send to backend */}} />
```

- **Build custom forms with the handler**:
```jsx
<GoogleFormHandler formData={formData} onSuccess={() => reset()} onError={(errs) => console.log(errs)}>
  {/* your inputs here, include a submit button */}
  <button type="submit">Submit</button>
</GoogleFormHandler>
```


## Notes
- Google Forms do not send CORS headers, so submissions use `fetch` with `mode: 'no-cors'`. Responses are opaque; rely on request success and client-side messaging.
- `service` values expected by components: `corporate-tax-filing`, `corporate-tax-filing-payable`.

### App (`src/App.js`)
- **Description**: Root application shell composing the site sections and showing `ContactPopup` on first visit.
- **Props**: None
- **Usage**:
```jsx
import App from './src/App';

// Rendered in src/index.js
```