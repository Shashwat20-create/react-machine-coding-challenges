const Accordion = ({ ques, answ, isOpen, setIsOpen }) => {
  return (
    <div className="accordion">
      {ques}
      <span onClick={setIsOpen}>{isOpen ? "-" : "+"}</span>
      {isOpen && <p>{answ}</p>}
    </div>
  );
};
export default Accordion;
