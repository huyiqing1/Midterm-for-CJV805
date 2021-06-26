import { useState } from "react";
import Logo from "./Logo";

var sum = 0;
var numberSelected = [];
var selectList = new Array(20);

const Game = () => {
    const [number, setNumber] = useState([]);
    const [isSelected, setIsSelected] = useState([])
    const [total, setTotal] = useState('0');
    const [a, setA] = useState('');

    const handleCoinClick = (value) => {
        if (number.length === 5) {
            sum += value;
            setTotal(sum);
            setA(value);
        } else {
            alert("You have to choose 5 numbers first!")
        }
    }

    const handleNumberClick = (value) => {
        setA(value);
        if (numberSelected.includes(value)) {
            setA(value + 1);
            selectList[value - 1] = false;
            numberSelected.splice(numberSelected.indexOf(value), 1);
        } else {
            setA(value + 3);
            if (numberSelected.length < 5) {
                setA(value + 2);
                numberSelected.push(value);
                selectList[value - 1] = true;
            } else {
                setA(value + 4);
                alert("You can only choose 5 numbers!");
            }
        }
        setNumber(numberSelected);
        setIsSelected(selectList);
    }

    const handleCashClick = () => {
        var message = 'The numbers you have selected are';
        setA(7);
        if (number.length === 5 && total > 0) {
            for (var i = 0; i < 5; i++) {
                message += '  ' + number[i];
            }
            message += '. The total amount is $' + total;
            alert(message);
            handleClearClick();
        } else if (number.length < 5) {
            alert("You have to choose 5 numbers first!")
        } else {
            alert("Please enter the amount you want to pay!");
        }
    }

    const handleClearClick = () => {
        setIsSelected([]);
        setNumber([]);
        setTotal('0');
        numberSelected = [];
        sum = 0;
        selectList = new Array(20);
        setA(12);
    }

    const handleRandomClick = () => {
        handleClearClick();
        const randomList = [];
        for (var i = 0; i < 5; i++) {
            let a = Math.floor(Math.random() * 20 + 1);
            if (!randomList.includes(a)) {
                randomList.push(a);
                setA(a);
            } else {
                i--;
            }
        }
        for (var j = 0; j < 5; j++) {
            handleNumberClick(randomList[j]);
        }
        setA(100);
    }

    return (
        <div className="Game">
            <div>
                <div className="Container">
                    <Logo />
                    <div className="Coins">
                        <table className="coins-table">
                            <tbody>
                                <tr>
                                    <td><button onClick={() => handleCoinClick(1)}>$1</button></td>
                                    <td><button onClick={() => handleCoinClick(5)}>$5</button></td>
                                </tr>
                                <tr>
                                    <td><button onClick={() => handleCoinClick(10)}>$10</button></td>
                                    <td><button onClick={() => handleCoinClick(20)}>$20</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>

            <div className="Numbers">
                <table className="numbers-table">
                    <tbody>
                        <tr>
                            {!isSelected[0] && <td className="number"><button id="1" onClick={() => handleNumberClick(1)}>1</button></td>}
                            {isSelected[0] && <td className="number" style={{ border: '3px solid red' }}><button id="1" onClick={() => handleNumberClick(1)}>1</button></td>}
                            {!isSelected[1] && <td className="number"><button id="2" onClick={() => handleNumberClick(2)}>2</button></td>}
                            {isSelected[1] && <td className="number" style={{ border: '3px solid red' }}><button id="2" onClick={() => handleNumberClick(2)}>2</button></td>}
                            {!isSelected[2] && <td className="number"><button id="3" onClick={() => handleNumberClick(3)}>3</button></td>}
                            {isSelected[2] && <td className="number" style={{ border: '3px solid red' }}><button id="3" onClick={() => handleNumberClick(3)}>3</button></td>}
                            {!isSelected[3] && <td className="number"><button id="4" onClick={() => handleNumberClick(4)}>4</button></td>}
                            {isSelected[3] && <td className="number" style={{ border: '3px solid red' }}><button id="4" onClick={() => handleNumberClick(4)}>4</button></td>}
                            {!isSelected[4] && <td className="number"><button id="5" onClick={() => handleNumberClick(5)}>5</button></td>}
                            {isSelected[4] && <td className="number" style={{ border: '3px solid red' }}><button id="5" onClick={() => handleNumberClick(5)}>5</button></td>}
                            {!isSelected[5] && <td className="number"><button id="6" onClick={() => handleNumberClick(6)}>6</button></td>}
                            {isSelected[5] && <td className="number" style={{ border: '3px solid red' }}><button id="6" onClick={() => handleNumberClick(6)}>6</button></td>}
                        </tr>
                        <tr>
                            {!isSelected[6] && <td className="number"><button id="7" onClick={() => handleNumberClick(7)}>7</button></td>}
                            {isSelected[6] && <td className="number" style={{ border: '3px solid red' }}><button id="7" onClick={() => handleNumberClick(7)}>7</button></td>}
                            {!isSelected[7] && <td className="number"><button id="8" onClick={() => handleNumberClick(8)}>8</button></td>}
                            {isSelected[7] && <td className="number" style={{ border: '3px solid red' }}><button id="8" onClick={() => handleNumberClick(8)}>8</button></td>}
                            {!isSelected[8] && <td className="number"><button id="9" onClick={() => handleNumberClick(9)}>9</button></td>}
                            {isSelected[8] && <td className="number" style={{ border: '3px solid red' }}><button id="9" onClick={() => handleNumberClick(9)}>9</button></td>}
                            {!isSelected[9] && <td className="number"><button id="10" onClick={() => handleNumberClick(10)}>10</button></td>}
                            {isSelected[9] && <td className="number" style={{ border: '3px solid red' }}><button id="10" onClick={() => handleNumberClick(10)}>10</button></td>}
                            {!isSelected[10] && <td className="number"><button id="11" onClick={() => handleNumberClick(11)}>11</button></td>}
                            {isSelected[10] && <td className="number" style={{ border: '3px solid red' }}><button id="11" onClick={() => handleNumberClick(11)}>11</button></td>}
                            {!isSelected[11] && <td className="number"><button id="12" onClick={() => handleNumberClick(12)}>12</button></td>}
                            {isSelected[11] && <td className="number" style={{ border: '3px solid red' }}><button id="12" onClick={() => handleNumberClick(12)}>12</button></td>}
                        </tr>
                        <tr>
                            {!isSelected[12] && <td className="number"><button id="13" onClick={() => handleNumberClick(13)}>13</button></td>}
                            {isSelected[12] && <td className="number" style={{ border: '3px solid red' }}><button id="13" onClick={() => handleNumberClick(13)}>13</button></td>}
                            {!isSelected[13] && <td className="number"><button id="14" onClick={() => handleNumberClick(14)}>14</button></td>}
                            {isSelected[13] && <td className="number" style={{ border: '3px solid red' }}><button id="14" onClick={() => handleNumberClick(14)}>14</button></td>}
                            {!isSelected[14] && <td className="number"><button id="15" onClick={() => handleNumberClick(15)}>15</button></td>}
                            {isSelected[14] && <td className="number" style={{ border: '3px solid red' }}><button id="15" onClick={() => handleNumberClick(15)}>15</button></td>}
                            {!isSelected[15] && <td className="number"><button id="16" onClick={() => handleNumberClick(16)}>16</button></td>}
                            {isSelected[15] && <td className="number" style={{ border: '3px solid red' }}><button id="16" onClick={() => handleNumberClick(16)}>16</button></td>}
                            {!isSelected[16] && <td className="number"><button id="17" onClick={() => handleNumberClick(17)}>17</button></td>}
                            {isSelected[16] && <td className="number" style={{ border: '3px solid red' }}><button id="17" onClick={() => handleNumberClick(17)}>17</button></td>}
                            {!isSelected[17] && <td className="number"><button id="18" onClick={() => handleNumberClick(18)}>18</button></td>}
                            {isSelected[17] && <td className="number" style={{ border: '3px solid red' }}><button id="18" onClick={() => handleNumberClick(18)}>18</button></td>}
                        </tr>
                        <tr>
                            {!isSelected[18] && <td className="number"><button id="19" onClick={() => handleNumberClick(19)}>19</button></td>}
                            {isSelected[18] && <td className="number" style={{ border: '3px solid red' }}><button id="19" onClick={() => handleNumberClick(19)}>19</button></td>}
                            {!isSelected[19] && <td className="number"><button id="20" onClick={() => handleNumberClick(20)}>20</button></td>}
                            {isSelected[19] && <td className="number" style={{ border: '3px solid red' }}><button id="20" onClick={() => handleNumberClick(20)}>20</button></td>}
                            <td className="cash" colSpan="2"><button onClick={handleCashClick}>CASH</button></td>
                            <td className="clear" colSpan="2"><button onClick={handleClearClick}>CLEAR</button></td>
                        </tr>
                        <tr>
                            <td className="random" colSpan="2" ><button onClick={handleRandomClick}>Random</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="Result" key={numberSelected.length}>
                <p>Numbers Selected: </p>
                {number.map((num) => (
                    <p key={num}>Mark: {num}</p>
                ))}
                <p className="total">Total: ${total}</p>
            </div>

        </div>
    );
}

export default Game;