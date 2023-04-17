import MyRichTextEditor from "./MyRichTextEditor";
import "./styles.css";

function App() {
  const initialHtml =
    '\r\n    <!DOCTYPE html>\r\n<html>\r\n<head>\r\n\r\n</style>\r\n</head>\r\n<body>\r\n    <p>\r\n    Dear Rishabh,\r\n    <br />\r\n     <strong>CP360 India Pvt. Ltd.</strong> is happy to offer you the position of <strong>Test Job 1</strong>. <br />\r\n     Your start date will be <strong>29/04/2023</strong> at <strong>12:30 PM.</strong> <br />\r\n      I have enclosed your Offer Letter here with. Please sign to acknowledge and share the copy of the same as an acceptance. In the meantime, please don’t hesitate to reach out to me, if you have any questions or concerns. We are looking forward to work with you. \r\n     <br />\r\n     **Please share the signed copy of the offer letter as acceptance within 3 days of this email or it will be considered retracted. <br />\r\n     For any queries, contact <strong>Andrea Castre </strong> at <strong>Andrea.Castre@cp-360.com</strong>\r\n     <div><a  style="background-color: #f44336; color: white; padding: 14px 25px; text-align: center; text-decoration: none; display: inline-block;" href="http://career-api.cp360apps.com/api/update/offer/letter/viewed/status/1060/" target="_blank" style="color: white; text-decoration: none;">View Offer</a></div> </p> \r\n</body>\r\n</html>\r\n     ';

  return (
    <div className="App">
      <MyRichTextEditor initialHtml={initialHtml} />
    </div>
  );
}

export default App;
