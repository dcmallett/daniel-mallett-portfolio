"use client";

import React from "react";

interface FormInputProps {
	id: string;
	name: string;
	type: "text" | "email";
	label: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	placeholder?: string;
	required?: boolean;
	className?: string;
}

export default function FormInput({
	id,
	name,
	type,
	label,
	value,
	onChange,
	placeholder,
	required = false,
	className = "",
}: FormInputProps) {
	return (
		<div className={className}>
			<label
				htmlFor={id}
				className="block text-sm font-medium text-gray-700 mb-1"
			>
				{label} {required && "*"}
			</label>
			<input
				type={type}
				id={id}
				name={name}
				required={required}
				value={value}
				onChange={onChange}
				className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
				placeholder={placeholder}
			/>
		</div>
	);
}
