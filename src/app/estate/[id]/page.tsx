import EstateDetails from "src/common/Estates/EstateDetails";
const page = async ({ params: { id } }: { params: { id: number } }) => {
  return <EstateDetails id={id} />;
};

export default page;
