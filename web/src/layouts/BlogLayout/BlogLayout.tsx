import { Link, routes } from "@redwoodjs/router";

type BlogLayoutProps = {
	children?: React.ReactNode;
};

const BlogLayout = ({ children }: BlogLayoutProps) => {
	return (
		<>
			<Link to={routes.home()}>Home</Link>`
			<Link to={routes.about()}>About</Link>`{children}
		</>
	);
};

export default BlogLayout;
