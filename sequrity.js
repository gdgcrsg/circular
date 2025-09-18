<script>
  // ===== পাসওয়ার্ড প্রটেকশন =====
  const correctPassword = "gdc36";

  // DOM তৈরি হওয়ার পরে
  document.addEventListener("DOMContentLoaded", function() {
    // body-এর কন্টেন্ট লুকানো
    const bodyContent = document.body.innerHTML;
    document.body.innerHTML = `
      <div style="display:flex;flex-direction:column;justify-content:center;align-items:center;height:100vh;font-family:'Segoe UI',sans-serif;background:#0f172a;color:#fff;text-align:center;">
        <h1>ওয়েবসাইটে প্রবেশের জন্য পাসওয়ার্ড দিন</h1>
        <input type="password" id="passwordInput" placeholder="পাসওয়ার্ড লিখুন" style="padding:10px;font-size:1rem;border-radius:8px;border:none;margin-top:10px;width:200px;text-align:center;">
        <button id="passwordBtn" style="padding:10px 20px;font-size:1rem;margin-top:10px;border:none;border-radius:8px;background:#1d4ed8;color:#fff;cursor:pointer;">প্রবেশ করুন</button>
        <div id="errorMsg" style="color:#f87171;margin-top:10px;font-weight:bold;"></div>
      </div>
    `;

    const passwordInput = document.getElementById("passwordInput");
    const passwordBtn = document.getElementById("passwordBtn");
    const errorMsg = document.getElementById("errorMsg");

    function checkPassword() {
      if(passwordInput.value === correctPassword) {
        // পাসওয়ার্ড সঠিক হলে মূল কন্টেন্ট পুনঃলোড
        document.body.innerHTML = bodyContent;
        // মূল স্ক্রিপ্ট আবার চালানো (তুমি চাইলে loadData() কল করতে পারো)
        if(typeof loadData === "function") loadData();
      } else {
        errorMsg.textContent = "পাসওয়ার্ড সঠিক নয়! পুনরায় চেষ্টা করুন।";
      }
    }

    passwordBtn.addEventListener("click", checkPassword);
    passwordInput.addEventListener("keyup", function(event) {
      if(event.key === "Enter") checkPassword();
    });
  });
</script>
