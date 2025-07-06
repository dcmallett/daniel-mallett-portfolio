"use client";

import React from "react";

interface FormTextareaProps {
	id: string;
	name: string;
	label: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
	placeholder?: string;
	required?: boolean;
	rows?: number;
	className?: string;
}

export default function FormTextarea({
	id,
	name,
	label,
	value,
	onChange,
	placeholder,
	required = false,
	rows = 4,
	className = "",
}: FormTextareaProps) {
	return (
		<div className={className}>
			<label
				htmlFor={id}
				className="block text-sm font-medium text-gray-700 mb-1"
			>
				{label} {required && "*"}
			</label>
			<textarea
				id={id}
				name={name}
				required={required}
				rows={rows}
				value={value}
				onChange={onChange}
				className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical"
				placeholder={placeholder}
			/>
		</div>
	);
}
