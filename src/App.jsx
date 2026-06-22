import {useState} from 'react'
import Mortgage_caculator from './Mortgage_caculator';
const App = () => {
  const [LoanAmount,setLoanAmount] = useState(0);
  const [DownPayment,setDownPayment] = useState(0);
  const [RateofInterest, setRateofInterest] = useState(0);
  const [LoanTerm, setLoanTerm] = useState(0);
  const [ShowResult, setShowResult] = useState(false);
  const ChangAmt=(amt)=>{
    setLoanAmount(Number(amt));
  }
  const ChangeDP=(dpyt)=>{
    setDownPayment(Number(dpyt));
  }
  const ChangeRoi=(roi)=>{
      setRateofInterest(Number(roi));

  }
  const ChangeLnTerm=(lnterm)=>{
    setLoanTerm(Number(lnterm));
  }
  const calculate=(LoanAmount-DownPayment)*(RateofInterest*(Math.pow(1+RateofInterest,LoanTerm)))/(Math.pow(1+RateofInterest,LoanTerm)-1).toFixed(2);

  return (
    <div>
      <div className="inner">
        <h1>Mortgage Calculator</h1>
        <h3>Loan Amount(₹)</h3>
        <input type="number" placeholder="Amount" onChange={(elem)=>{
          ChangAmt(elem.target.value);
        }}></input>
        <h3>Down Payment(₹)</h3>
        <input type="number" placeholder="Down Payment" onChange={(elem)=>{
          ChangeDP(elem.target.value);
        }}></input>
        <h3>Rate of Interest(%)</h3>
        <input type="number" placeholder="Annual Interest Rate"onChange={(elem)=>{
          ChangeRoi(elem.target.value)
        }}></input>
        <h3>Loan Term(years)</h3>
        <input type="number" placeholder="Loan Term" onChange={(elem)=>{
             ChangeLnTerm(elem.target.value);
        }}></input>
        <button type="button" onClick={()=>setShowResult(true)}>Calculate</button>

        {ShowResult && (
          <Mortgage_caculator calculate={calculate}/>
        )}
      </div>
    </div>
  )
}

export default App