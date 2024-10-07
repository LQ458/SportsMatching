"use client";
import { useState, FormEvent } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { RainbowButton } from "@/components/ui/rainbow-button";
import SparklesText from "@/components/ui/sparkles-text";

export default function Home() {
  const [sport, setSport] = useState<string>("");
  const [timeSlot, setTimeSlot] = useState<string[]>([]);
  const [weekDays, setWeekDays] = useState<string[]>([]);
  const [gradePref, setGradePref] = useState<string[]>([]);
  const [identity, setIdentity] = useState<string>("");
  const [studentGrade, setStudentGrade] = useState<string>("");
  const [studentID, setStudentID] = useState<string>("");
  const [teacherName, setTeacherName] = useState<string>("");
  const [teacherID, setTeacherID] = useState<string>("");
  const [output, setOutput] = useState<string>("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    let additionalInfo = "";
    if (identity === "学生") {
      additionalInfo = `学生年级: ${studentGrade}<br>学生学号: ${studentID}`;
    } else if (identity === "老师") {
      additionalInfo = `老师姓名: ${teacherName}<br>老师编号: ${teacherID}`;
    }
    setOutput(`
      <h2>你的偏好</h2>
      <p>运动类型: ${sport}</p>
      <p>时间段: ${timeSlot.join(", ")}</p>
      <p>周几: ${weekDays.join(", ")}</p>
      <p>年级偏好: ${gradePref.join(", ")}</p>
      <p>使用者身份: ${identity}</p>
      ${additionalInfo ? `<p>${additionalInfo}</p>` : ""}
    `);
  };

  return (
    <div className="container mt-5">
      <SparklesText text="记录你的运动偏好" />
      <br />
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="sport" className="form-label">
            运动类型
          </label>
          <select
            id="sport"
            className="form-select"
            value={sport}
            onChange={(e) => setSport(e.target.value)}
            required
          >
            <option value="">选择运动</option>
            <option value="足球">足球</option>
            <option value="排球">排球</option>
            <option value="篮球">篮球</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="timeSlot" className="form-label">
            时间段
          </label>
          <select
            id="timeSlot"
            className="form-select"
            multiple
            value={timeSlot}
            onChange={(e) =>
              setTimeSlot(Array.from(e.target.selectedOptions, (o) => o.value))
            }
            required
          >
            <option value="12:10-12:40">12:10-12:40</option>
            <option value="12:40-13:05">12:40-13:05</option>
            <option value="15:45-16:15">15:45-16:15</option>
            <option value="16:15-16:45">16:15-16:45</option>
            <option value="16:45-17:15">16:45-17:15</option>
            <option value="17:15-17:45">17:15-17:45</option>
            <option value="17:45-18:10">17:45-18:10</option>
            <option value="21:00-21:30">21:00-21:30</option>
            <option value="21:30-22:00">21:30-22:00</option>
            <option value="22:00-22:10">22:00-22:10</option>
          </select>
          <small className="form-text text-muted">
            按住 Ctrl 或 Command 键进行多选
          </small>
        </div>
        <div className="mb-3">
          <label htmlFor="weekDays" className="form-label">
            周几
          </label>
          <select
            id="weekDays"
            className="form-select"
            multiple
            value={weekDays}
            onChange={(e) =>
              setWeekDays(Array.from(e.target.selectedOptions, (o) => o.value))
            }
            required
          >
            <option value="周一">周一</option>
            <option value="周二">周二</option>
            <option value="周三">周三</option>
            <option value="周四">周四</option>
            <option value="周五">周五</option>
            <option value="周六">周六</option>
            <option value="周日">周日</option>
          </select>
          <small className="form-text text-muted">
            按住 Ctrl 或 Command 键进行多选
          </small>
        </div>
        <div className="mb-3">
          <label htmlFor="gradePref" className="form-label">
            年级偏好
          </label>
          <select
            id="gradePref"
            className="form-select"
            multiple
            value={gradePref}
            onChange={(e) =>
              setGradePref(Array.from(e.target.selectedOptions, (o) => o.value))
            }
            required
          >
            <option value="七年级">七年级</option>
            <option value="八年级">八年级</option>
            <option value="九年级">九年级</option>
            <option value="高一">高一</option>
            <option value="高二">高二</option>
            <option value="高三">高三</option>
            <option value="高四">高四</option>
          </select>
          <small className="form-text text-muted">
            按住 Ctrl 或 Command 键进行多选
          </small>
        </div>
        <div className="mb-3">
          <label htmlFor="identity" className="form-label">
            使用者身份
          </label>
          <select
            id="identity"
            className="form-select"
            value={identity}
            onChange={(e) => setIdentity(e.target.value)}
            required
          >
            <option value="">选择身份</option>
            <option value="学生">学生</option>
            <option value="老师">老师</option>
          </select>
        </div>
        {identity === "学生" && (
          <div>
            <div className="mb-3">
              <label htmlFor="studentGrade" className="form-label">
                学生年级
              </label>
              <select
                id="studentGrade"
                className="form-select"
                value={studentGrade}
                onChange={(e) => setStudentGrade(e.target.value)}
              >
                <option value="七年级">七年级</option>
                <option value="八年级">八年级</option>
                <option value="九年级">九年级</option>
                <option value="高一">高一</option>
                <option value="高二">高二</option>
                <option value="高三">高三</option>
                <option value="高四">高四</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="studentID" className="form-label">
                学生学号
              </label>
              <input
                type="text"
                id="studentID"
                className="form-control"
                value={studentID}
                onChange={(e) => setStudentID(e.target.value)}
                placeholder="输入学生学号"
              />
            </div>
          </div>
        )}
        {identity === "老师" && (
          <div>
            <div className="mb-3">
              <label htmlFor="teacherName" className="form-label">
                老师姓名
              </label>
              <input
                type="text"
                id="teacherName"
                className="form-control"
                value={teacherName}
                onChange={(e) => setTeacherName(e.target.value)}
                placeholder="输入老师姓名"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="teacherID" className="form-label">
                老师编号
              </label>
              <input
                type="text"
                id="teacherID"
                className="form-control"
                value={teacherID}
                onChange={(e) => setTeacherID(e.target.value)}
                placeholder="输入老师编号"
              />
            </div>
          </div>
        )}
        <RainbowButton type="submit">保存偏好</RainbowButton>
      </form>
      <div dangerouslySetInnerHTML={{ __html: output }} className="mt-4" />
    </div>
  );
}
