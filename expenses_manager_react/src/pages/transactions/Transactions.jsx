import { useState } from "react";
import './transactions.css';
import {bankingIcons} from '../../services/icons';
import icons from '../../services/icons';

const Transactions = () => {
    const date = new Date();
    const [action, setAction] = useState('Expenses');
    const [fromAccount, setFromAccount] = useState('');
    const [toAccount, setToAccount] = useState('');
    const [charge, setCharge] = useState(0);
    const [amount, setAmount] = useState(0);
    const [dateTime, setDateTime] = useState(date);
    const [description, setDescription] = useState('');


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
                    <div className="categoreies">
                        {   action == 'Expenses' &&
                            icons.map((category, index) => (
                                <div key={index} className='category-section'>
                                    <p className="category-title">{category.category}</p>
                                    <div className="category-icons">
                                        {category.icons.map((item, iconIndex) => (
                                            <div className="category" key={iconIndex}>
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
                            <div>
                                <h4>Tranfer Money</h4>
                                <p>{description}</p>
                                <p>Amount: {amount}</p>
                                <p>Date: {dateTime.toLocaleString()}</p>
                            </div>
                        }
                        
                        
                    </div>
                    <div className="form-actions">
                        <input className="input desc" placeholder="Enter description" type="text" onChange={($event) => {setDescription(event.target.value)}} />
                        <input className="input asset" placeholder="Select from asset" type="text" />
                        <input className="input amount" placeholder="Enter Amount" type="text" onChange={($event)=> {setAmount(event.target.value)}} />
                        <input className="input date" placeholder="Select Date & time" 
                            type="date" onSelect={($event)=> {setDateTime(new Date(event.target.value))}}/>
                        <input className="input time" placeholder="Select Date & time" type="text" />
                        <button className="submit-button" type="submit">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Transactions;