import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

const initState = {
  email: '',
  pw: '',
  nickname: ''
}

const ModifyComponent = () => {

  const [member, setMember] = useState(initState)
  const loginInfo = useSelector(state => state.loginSlice)

  useEffect(()=> {
    setMember({...loginInfo, pw: 'ABCD'})
  }, [loginInfo])

  const handleChange = (e) => {
    member[e.target.name] = e.target.value
    setMember({...member})
  }

  return (
    <div className="mt-6">
      <div className="flex justify-center">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
        </div>
      </div>
    </div>
  );

}

export default ModifyComponent
