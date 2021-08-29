import { project } from '../../helpers/Constrains';

interface IProps {
	icon?: {
		src: string;
	};
	description?: string;
	title: string;
}

const HeaderSection = ({ icon, description, title }: IProps) => {
	return (
		<>
			<div className="header-section py-0 py-md-5">
				{icon && <img src={`${project.basePath}${icon.src}`} alt={description && description} />}
				<div className="py-0 py-md-3">
					{title && <h2>{title.toUpperCase()}</h2>}
					{description && <p>{description}</p>}
				</div>
			</div>
		</>
	);
};
export default HeaderSection;
