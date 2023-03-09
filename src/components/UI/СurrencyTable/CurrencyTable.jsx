import React from 'react';

const CurrencyTable = () => {
    return (
        <table>
            <thead>
                <tr>
                    <td>
                        Наименование валюты
                    </td>
                    <td>
                        Буквенный код
                    </td>
                    <td>
                        Значение к рублю
                    </td>
                    <td>
                        Динамика за сутки
                    </td>
                </tr>
            </thead>
        </table>
    );
};

export default CurrencyTable;