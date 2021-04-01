import SCRoundButton from './RoundButton.styled';

const RoundButton = ({ children, className, disabled, onClick, ...props }) => {

  return (
    <SCRoundButton
      {...props}
      className={className}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </SCRoundButton>
  );
};
export default RoundButton;