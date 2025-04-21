import { useState } from "react";
import './transactions.css';
import {bankingIcons} from '../../services/icons';
import icons from '../../services/icons';
import { TbTransferVertical } from "react-icons/tb";

const Transactions = () => {
    const date = new Date();
    const [action, setAction] = useState('Expense');
    const [fromAccount, setFromAccount] = useState('');
    const [toAccount, setToAccount] = useState('');
    const [charge, setCharge] = useState(0); 
    const [category, setCategory] = useState('');
    const [amount, setAmount] = useState(0);
    const [dateTime, setDateTime] = useState(date);
    const [description, setDescription] = useState('');

    const handelSubmit = (event) => {   
        event.preventDefault();
        let transaction = {};
        if(action !== 'Transfer'){ 
            transaction = {
                action: action,
                fromAccount: fromAccount,
                category: category.category,
                icon: category.label,
                amount: amount,
                dateTime: dateTime,
                description: description
            }
        } else {
            transaction = {
                action: action,
                fromAccount: fromAccount,
                toAccount: toAccount,
                charge: charge,
                category: category.category,
                icon: category.label,
                amount: amount,
                dateTime: dateTime,
                description: description
            }
        }
        console.log(transaction);

        setAction('Expense');
        setFromAccount('');
        setToAccount('');
        setCharge(0);
        setCategory('');
        setAmount(0);
        setDateTime(new Date());
        setDescription('');

    }
    return (
        <div className='transactions-container'>
            <div className="breadCrumb">Transactions</div>
            <div className="transactions-body">
                <div className="transactions">
                    list of transcations
                </div>
                <div className="add-transaction">
                    <div className="actions">
                        <div className={`action-item ${action === 'Expense' ? 'active' : ''}`} onClick={()=> {setAction('Expense')}}>Expenses</div>
                        <div className={`action-item ${action === 'Income' ? 'active' : ''}`} onClick={()=> {setAction('Income')}}>Income</div>
                        <div className={`action-item ${action === 'Transfer' ? 'active' : ''}`} onClick={()=> {setAction('Transfer')}}>Transfer</div>
                    </div>
                    <div className="categoreies">
                        {   action == 'Expense' &&
                            icons.map((category, index) => (
                                <div key={index} className='category-section'>
                                    <p className="category-title">{category.category}</p>
                                    <div className="category-icons">
                                        {category.icons.map((item, iconIndex) => (
                                            <div className="category" key={iconIndex} onClick={() => {setCategory({...item, category: category.category})}}>
                                                <div className="cat-icon">{item.icon}</div>
                                                <div className="cat-label">{item.desc}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))
                        }
                        {   action == "Income" &&
                            <div className="category-section">
                            <p className="category-title">Finance</p>
                            <div className="category-icons">
                            {
                                bankingIcons.map((item, index) => (
                                    <div className="category" key={index}>
                                        <div className="cat-icon">{item.icon}</div>
                                        <div className="cat-label">{item.desc}</div>
                                    </div>
                                ))
                            }
                            </div>
                            </div>
                        }

                        {
                            action== "Transfer" &&
                            <div className="transfer-section">
                                <h4>Tranfer Money</h4>
                                <div className="transfer-accounts">
                                    <input className="input tf" type="text" placeholder="From Account"
                                    onChange={(e)=> setFromAccount(e.target.value)}/>
                                    <TbTransferVertical className="transfer-icon" />
                                    <input className="input tf"  type="text" placeholder="To Account"
                                    onChange={(e)=> setToAccount(e.target.value)} />
                                    <input className="input tf" type="text"  placeholder="charges"
                                    onChange={(e)=> setCharge(e.target.value)}/>
                                </div>
                            </div>
                        }
                        
                        
                    </div>
                    <div className="form-actions">
                        <input className="input desc" placeholder="Enter description" type="text" 
                            value={description}
                            onChange={(e) => setDescription(e.target.value)} />
                        <input className="input asset" placeholder="Select from asset" type="text" 
                            value={fromAccount}
                            onChange={(e) => setFromAccount(e.target.value)}/>
                        <input className="input amount" placeholder="Enter Amount" type="text"
                            value={amount}
                            onChange={(e)=> setAmount(e.target.value)} />
                        <input className="input date" placeholder="Select Date & time" 
                            value={dateTime.toISOString().split('T')[0]}
                            type="date" onSelect={(e)=> setDateTime(new Date(e.target.value))}/>
                        <input className="input time" placeholder="Select Date & time" type="text" />
                        <button className="submit-button" type="submit" onClick={handelSubmit}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Transactions;