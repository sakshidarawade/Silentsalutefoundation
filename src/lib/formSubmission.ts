export type FormSubmission = {
  type: 'contact' | 'donation';
  fullName: string;
  email: string;
  phone: string;
  subject?: string;
  message: string;
};

export async function submitForm(data: FormSubmission) {
  const response = await fetch('/api/forms', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  const result = (await response.json()) as { error?: string };

  if (!response.ok) {
    throw new Error(result.error || 'Unable to send your form right now.');
  }
}
