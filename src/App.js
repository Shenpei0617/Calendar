import './App.scss';
import { useState,useEffect } from 'react';

function App() {
  const [newCalendar, setNewCalendar] = useState(new Date());
  //取得當天年月日
  const newYear = newCalendar.getFullYear();
  const newMonth = newCalendar.getMonth();
  const newDate = newCalendar.getDate();

  const newMonthDay = new Date(newYear, newMonth, 1); //這個月第一天
  const beforeMonthLastDay = new Date(newYear, newMonth, 0); //上個月最後一天
  const newMonthLastDay = new Date(newYear, newMonth + 1, 0); //這個月最後一天
  const nowAllDays = newMonthLastDay.getDate(); //這個月最後一天日期
  const nowDayWeek = newMonthDay.getDay(); //這個月第一天的星期

  const [startDate, setStartDate] = useState(null); // 設定開始日期
  const [endDate, setEndDate] = useState(null); // 設定結束日期
  const [selectDays, setSelectDays] = useState(null) //選取的日期
  

  const calendarDays = [];
  // 填入上個月的日期
  for (let i = nowDayWeek - 1; i >= 0; i--) {
    calendarDays.push(beforeMonthLastDay.getDate() - i);
  }
  // 填入當月的日期
  for (let i = 1; i <= nowAllDays; i++) {
    calendarDays.push(i);
  }
  // 填入下個月的日期（直到35）
  for (let i = 1; calendarDays.length < 42 ; i++) {
    calendarDays.push(i);
  }
// 點擊日期邏輯
const handleDateClick = (day) => {
  if (!startDate || endDate ) {
    setStartDate(day);//設開始
    setEndDate(null); // 重置結束
  } else if (!endDate && day >= startDate) {
    setEndDate(day); //設結束
  } else if (day < startDate) {
    setStartDate(day);//重置開始
    setEndDate(null); //重置結束
  }
};

useEffect(() => {
  //選開始到結束所有日期
  if (startDate !== null && endDate !== null) {
    let selectDays = calendarDays.filter(days => startDate <= days && endDate >= days);
    selectDays = selectDays.filter((item, index) => selectDays.indexOf(item) === index);
    setSelectDays(selectDays);
  } else {
    setSelectDays([]);
  }
  
}, [startDate, endDate]);

//上一個月
const handlePreviousMonth = () => {
  setSelectDays([]);
  setNewCalendar(prev => {
    const newDate = new Date(prev);
    newDate.setMonth(prev.getMonth() - 1);
    return newDate;
  });
};

const handleNextMonth = () => {
  setSelectDays([]);
  setNewCalendar(prev => {
    const newDate = new Date(prev);
    newDate.setMonth(prev.getMonth() + 1);
    return newDate;
  });
};

  return (
    <div className='wrap-calendar'>
      <div className="calendar">
        <div className="calendar-header">
          <div className="month-select" onClick={handlePreviousMonth}>‹</div>
          <div className="month-label">{`${newYear}年${newMonth + 1}月`}</div>
          <div className="month-select" onClick={handleNextMonth}>›</div>
        </div>
        <div className="calendar-grid">
        {calendarDays.map((day,index) => {
          const isOtherMonth = index + 1 < day || index - day > 14;
          const isStart = day === startDate && !isOtherMonth;
          const isSelect = !isOtherMonth && selectDays && selectDays.includes(day);
          const nowMonth = new Date().getMonth()
          
            return(
            <div key={index} 
            className={`day ${isOtherMonth ? 'ortherMonth' : ''}${nowMonth === newMonth && !isOtherMonth && day === newDate ? 'today':''}${isStart ? ' start' : ''}${isSelect ? ' end' : ''}
            `}
            onClick={!isOtherMonth ? () => handleDateClick(day) : null}
            >
              {day}
            </div>
            )
        })}
        </div>
      </div>
    </div>
  );
}

export default App;
