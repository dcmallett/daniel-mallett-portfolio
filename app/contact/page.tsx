import { ContactForm } from "@/components/ContactForm";

export default function ContactPage() {
	const handleSubmitSuccess = () => {
		console.log("Form submitted successfully!");
	};

	const handleSubmitError = (error: Error) => {
		console.error("Form submission error:", error);
	};

	return (
		<div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
			<ContactForm
				onSubmitSuccess={handleSubmitSuccess}
				onSubmitError={handleSubmitError}
			/>
		</div>
	);
}
