export default function Avatar() {
  return (
    <div className="links right">
      <a href="https://twitter.com/intent/user?screen_name=ThatJsDev" target="_blank" className="profile-link w-inline-block">
        <img src="/images/profile_400x400.jpeg" alt="" className="avatar w-6 rounded-full mr-2" />
        <div>By <strong>@ThatJsDev</strong></div>
      </a>
    </div>
  )
}