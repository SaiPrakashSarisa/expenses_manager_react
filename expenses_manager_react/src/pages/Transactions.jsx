import { useState } from "react";

const Transactions = () => {

    const [action, setAction] = useState('Expenses');
    return (
        <div className='transactions-container'>
            <div className="breadCrumb">Transactions</div>
            <div className="transactions-body">
                <div className="transactions">
                    list of transcations
                </div>
                <div className="add-transaction">
                    <div className="actions">
                        <div className={`action-item ${action === 'Expenses' ? 'active' : ''}`} onClick={()=> {setAction('Expenses')}}>Expenses</div>
                        <div className={`action-item ${action === 'Income' ? 'active' : ''}`} onClick={()=> {setAction('Income')}}>Income</div>
                        <div className={`action-item ${action === 'Transfer' ? 'active' : ''}`} onClick={()=> {setAction('Transfer')}}>Transfer</div>
                    </div>
                    <div className="categoreies">Categories icons</div>
                    <div className="form-actions">form and submit</div>
                </div>
            </div>
        </div>
    )
}

export default Transactions;