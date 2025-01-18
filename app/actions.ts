'use server'

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export async function submitContactForm(formData: FormData) {
  try {
    const data: ContactFormData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      message: formData.get('message') as string,
    };

    // Validate the data
    if (!data.name || !data.email || !data.phone || !data.message) {
      return {
        success: false,
        message: 'Please fill in all fields'
      };
    }

    // Here you could add additional logic like:
    // - Sending an email
    // - Storing in a database
    // - Triggering notifications

    // Format the WhatsApp message
    const whatsappMessage = `
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}

Message: ${data.message}
    `.trim();

    // Return success with the WhatsApp message
    return {
      success: true,
      whatsappMessage: encodeURIComponent(whatsappMessage),
      message: 'Form submitted successfully!'
    };

  } catch (error) {
    return {
      success: false,
      message: 'Something went wrong. Please try again.'
    };
  }
}

