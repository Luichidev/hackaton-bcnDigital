export function Checkbox({ register, name, title }) {
  return (
    <div className="skill-item">
      <input {...register(name)} id={name} type="checkbox" />
      <label htmlFor={name}>{title}</label>
    </div>
  )
}
