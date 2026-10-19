/**
 * Contact submission service
 * Isolates communication layer and simulates realistic async network behavior
 * without claiming false real backend delivery.
 */
export const contactService = {
  async submitMessage(formData) {
    // Basic client validation check
    if (!formData.name || !formData.email || !formData.message) {
      throw new Error('Please fill in all required fields (Name, Email, Message).');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      throw new Error('Please enter a valid email address.');
    }

    if (formData.message.trim().length < 10) {
      throw new Error('Message must be at least 10 characters long.');
    }

    // Simulate realistic network roundtrip
    await new Promise((resolve) => setTimeout(resolve, 1400));

    // Log payload for developer visibility
    console.log('[ContactService] Message simulated submission:', {
      ...formData,
      receivedAt: new Date().toISOString(),
      recipient: 'atuldemond@gmail.com',
    });

    return {
      success: true,
      message: 'Demo mode: Message logged successfully! Feel free to also email atuldemond@gmail.com directly.',
      timestamp: new Date().toISOString(),
      data: {
        name: formData.name,
        email: formData.email,
        subject: formData.subject || 'General Inquiry',
      },
    };
  },
};
