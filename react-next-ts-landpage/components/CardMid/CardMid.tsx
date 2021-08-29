interface IProps {
	cover: string;
	description: string;
	title: string;
}

const CardMid = ({ cover, description, title }: IProps) => {
	return (
		<>
			<div className="card-mid">
				<div className="card-mid__cover">
					{cover && <img src={cover} alt={description && description} width={400} height={346} />}
				</div>
				<div className="card-mid__content">
					{title && <h3>{title.toUpperCase()}</h3>}
					{description && <p>{description}</p>}
				</div>
			</div>
		</>
	);
};
export default CardMid;
