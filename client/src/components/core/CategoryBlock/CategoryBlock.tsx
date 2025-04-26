interface CategoryProps {
  text: string;
}

const CategoryBlock = ({ text }: CategoryProps) => {
  return <div>{text}</div>;
};
export default CategoryBlock;
