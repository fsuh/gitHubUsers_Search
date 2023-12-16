import type { IconType } from "react-icons";

interface IFormInput {
	type: string;
	placeholder: string;
	icon: React.ReactElement<IconType>;
}
const FormInput: React.FC<IFormInput> = ({ type, placeholder, icon }) => {
	return (
		<div className="form-control w-full max-w-xs">
			<div className="flex items-center border-2 border-base-200 rounded bg-base-100">
				<i className="p-2">{icon}</i>
				<input
					type={type}
					placeholder={placeholder}
					className="input bg-neutral text-neutral-content w-full max-w-xs"
				/>
			</div>
		</div>
	);
};
export default FormInput;
