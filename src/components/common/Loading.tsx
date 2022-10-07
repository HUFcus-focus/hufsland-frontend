import { Oval } from "react-loader-spinner";

const Loading = () => {
  return (
    <Oval
      height={80}
      width={80}
      color='#adea97'
      wrapperStyle={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        backgroundColor: "#7c9bfb",
      }}
      visible={true}
      ariaLabel='oval-loading'
      secondaryColor='#adea97'
      strokeWidth={6}
      strokeWidthSecondary={6}
    />
  );
};

export default Loading;
