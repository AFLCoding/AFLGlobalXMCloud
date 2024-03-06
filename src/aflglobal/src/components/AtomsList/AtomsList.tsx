// import { DownloadButton } from "../../core/atoms/Button";

const AtomsList = () => {
  // Assuming you have a way to get the LinkField object (if required by DownloadButton)
  //const linkFieldObject = linkFieldObject(); // Replace with your logic

  const buttonProps = {
    label: "Click me!", // Use string as default if no LinkField available
    variant: 'secondary',
    buttonClassName: 'my-custom-class',
    style: { backgroundColor: 'lightblue' },
    onClick: () => alert('Button clicked!'),
  };

  return (
    <>
      {/* <DownloadButton {...buttonProps} /> */}
    </>
  );
};

export default AtomsList;
