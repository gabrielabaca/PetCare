import { NuxtLink } from '#build/components';
<template>
  <div class="side-bar pl-5 pr-3">
    <div class="web-logo mt-6 mb-8 ml-5">
      <NuxtImg src="img/petcare_logo.png"></NuxtImg>
    </div>

    <nav>
      <div>
        <h1 class="menu-title ml-6">MENU</h1>
        <ul>
          <NuxtLink href="/">
            <li>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1_17516)">
                  <path
                    d="M4 3.99997H10V12H4V3.99997Z"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4 16H10V20H4V16Z"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M14 12H20V20H14V12Z"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M14 3.99997H20V7.99997H14V3.99997Z"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
              Dashboard
            </li>
          </NuxtLink>
          <NuxtLink href="">
            <li>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1_17519)">
                  <path
                    d="M14.7 13.5C13.6 11.5 13.259 11 12 11C10.741 11 10.264 11.755 9.16401 13.747C8.22201 15.45 6.31801 15.592 5.84301 17.038C5.74601 17.303 5.69801 17.715 5.70001 18C5.70001 19.176 6.48701 20 7.50001 20C8.75901 20 10.5 19 12 19C13.5 19 15.241 20 16.5 20C17.513 20 18.3 19.177 18.3 18C18.3 17.715 18.251 17.303 18.154 17.038C17.679 15.587 15.642 15.203 14.7 13.5Z"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M20.188 8.08197C20.0595 8.02767 19.9215 7.99978 19.782 7.99997H19.767C19.032 8.01197 18.207 8.74997 17.774 9.86597C17.255 11.201 17.494 12.566 18.312 12.918C18.441 12.973 18.579 13 18.718 13C19.457 13 20.293 12.258 20.729 11.134C21.245 9.79897 21.001 8.43397 20.188 8.08197Z"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.47401 8.99997C9.52901 8.99997 9.58301 8.99997 9.63701 8.98897C10.581 8.86097 11.17 7.64297 10.957 6.26697C10.754 4.96997 9.91001 3.99997 9.02501 3.99997C8.97001 3.99997 8.91601 3.99997 8.86201 4.01097C7.91801 4.13897 7.32901 5.35697 7.54201 6.73297C7.74601 8.02597 8.59001 8.99997 9.47501 8.99997H9.47401Z"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.456 6.73297C16.67 5.35697 16.081 4.13897 15.136 4.01097C15.0823 4.00354 15.0282 3.99986 14.974 3.99997C14.089 3.99997 13.246 4.96997 13.044 6.26697C12.83 7.64297 13.419 8.86097 14.364 8.98897C14.418 8.99597 14.472 8.99997 14.526 8.99997C15.411 8.99997 16.256 8.02597 16.456 6.73297Z"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.69001 12.918C6.50601 12.566 6.74401 11.199 6.22601 9.86597C5.79001 8.74197 4.95501 7.99997 4.21701 7.99997C4.07701 7.99997 3.94001 8.02697 3.81001 8.08197C2.99401 8.43397 2.75601 9.80097 3.27401 11.134C3.71001 12.258 4.54501 13 5.28301 13C5.42301 13 5.56001 12.973 5.69001 12.918Z"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
              Pet Profile
            </li>
          </NuxtLink>
        </ul>
      </div>

      <div class="divider"></div>

      <div>
        <div class="menu-title ml-6">ANALYTICS</div>
        <ul>
          <NuxtLink>
            <li>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1_17525)">
                  <path
                    d="M4 8V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H8"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4 16V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H8"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V8"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16 20H18C18.5304 20 19.0391 19.7893 19.4142 19.4142C19.7893 19.0391 20 18.5304 20 18V16"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.60299 9.61C8.7929 9.41649 9.01947 9.26278 9.26946 9.15785C9.51946 9.05292 9.78787 8.99887 10.059 8.99887C10.3301 8.99887 10.5985 9.05292 10.8485 9.15785C11.0985 9.26278 11.3251 9.41649 11.515 9.61L12 10L12.5 9.604C12.6898 9.41262 12.9157 9.26084 13.1646 9.15747C13.4135 9.0541 13.6804 9.00121 13.95 9.00186C14.2195 9.00251 14.4862 9.05669 14.7346 9.16126C14.983 9.26583 15.2082 9.4187 15.397 9.611C15.7835 10.0045 16.0001 10.534 16.0001 11.0855C16.0001 11.6371 15.7835 12.1666 15.397 12.56L12 16L8.60299 12.56C8.21616 12.1665 7.99939 11.6368 7.99939 11.085C7.99939 10.5332 8.21616 10.0035 8.60299 9.61Z"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
              Health monitoring
            </li>
          </NuxtLink>
          <NuxtLink>
            <li>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1_17528)">
                  <path
                    d="M17 3L21 7"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M19 5L14.5 9.5"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11.5 6.5L17.5 12.5"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.5 11.5L10 18H6V14L12.5 7.5"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.5 12.5L9 14"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.5 9.5L12 11"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3 21L6 18"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
              Vaccination schedule
            </li>
          </NuxtLink>
        </ul>
      </div>

      <div class="divider"></div>

      <div>
        <div class="menu-title ml-6">SCHEDULE</div>
        <ul>
          <NuxtLink>
            <li>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1_17535)">
                  <path
                    d="M8 9H16"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8 13H14"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9 18H6C5.20435 18 4.44129 17.6839 3.87868 17.1213C3.31607 16.5587 3 15.7956 3 15V7C3 6.20435 3.31607 5.44129 3.87868 4.87868C4.44129 4.31607 5.20435 4 6 4H18C18.7956 4 19.5587 4.31607 20.1213 4.87868C20.6839 5.44129 21 6.20435 21 7V15C21 15.7956 20.6839 16.5587 20.1213 17.1213C19.5587 17.6839 18.7956 18 18 18H15L12 21L9 18Z"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
              Chat
              <NuxtImg
                src="img/chat_group.png"
                class="inline float-end mt-[-0.3rem]"
              />
            </li>
          </NuxtLink>
          <NuxtLink>
            <li>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1_17543)">
                  <path
                    d="M4 7C4 6.46957 4.21071 5.96086 4.58579 5.58579C4.96086 5.21071 5.46957 5 6 5H18C18.5304 5 19.0391 5.21071 19.4142 5.58579C19.7893 5.96086 20 6.46957 20 7V19C20 19.5304 19.7893 20.0391 19.4142 20.4142C19.0391 20.7893 18.5304 21 18 21H6C5.46957 21 4.96086 20.7893 4.58579 20.4142C4.21071 20.0391 4 19.5304 4 19V7Z"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16 3V7"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8 3V7"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4 11H20"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7 14H7.013"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.01 14H10.015"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13.01 14H13.015"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.015 14H16.02"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13.015 17H13.02"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.01001 17H7.01501"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.01 17H10.015"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
              Appointments
              <span
                class="bg-red-600 pt-[0.3rem] pl-[0.5rem] pb-[0.3rem] pr-[0.5rem] text-[0.75rem] ml-4 rounded-md text-white"
                >2</span
              >
            </li>
          </NuxtLink>
        </ul>
      </div>

      <div class="divider"></div>

      <div>
        <div class="menu-title ml-6">HELP</div>
        <ul>
          <NuxtLink>
            <li>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1_17553)">
                  <path
                    d="M19.875 6.27C20.2187 6.46546 20.5041 6.74897 20.7018 7.09136C20.8995 7.43374 21.0025 7.82263 21 8.218V15.502C21 16.311 20.557 17.057 19.842 17.45L13.092 21.72C12.7574 21.9037 12.3818 22.0001 12 22.0001C11.6182 22.0001 11.2426 21.9037 10.908 21.72L4.158 17.45C3.80817 17.2588 3.51612 16.9772 3.31241 16.6345C3.1087 16.2918 3.0008 15.9007 3 15.502V8.217C3 7.408 3.443 6.663 4.158 6.27L10.908 2.29C11.2525 2.10004 11.6396 2.00041 12.033 2.00041C12.4264 2.00041 12.8135 2.10004 13.158 2.29L19.908 6.27H19.875Z"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12Z"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
              Settings
            </li>
          </NuxtLink>
          <NuxtLink>
            <li>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1_17556)">
                  <path
                    d="M14 3V7C14 7.26522 14.1054 7.51957 14.2929 7.70711C14.4804 7.89464 14.7348 8 15 8H19"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M17 21H7C6.46957 21 5.96086 20.7893 5.58579 20.4142C5.21071 20.0391 5 19.5304 5 19V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H14L19 8V19C19 19.5304 18.7893 20.0391 18.4142 20.4142C18.0391 20.7893 17.5304 21 17 21Z"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9 9H10"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9 13H15"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9 17H15"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
              Documentation
            </li>
          </NuxtLink>
        </ul>
      </div>

      <div>
        <button class="btn-logout">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1_17559)">
              <path
                d="M14 8V6C14 5.46957 13.7893 4.96086 13.4142 4.58579C13.0391 4.21071 12.5304 4 12 4H5C4.46957 4 3.96086 4.21071 3.58579 4.58579C3.21071 4.96086 3 5.46957 3 6V18C3 18.5304 3.21071 19.0391 3.58579 19.4142C3.96086 19.7893 4.46957 20 5 20H12C12.5304 20 13.0391 19.7893 13.4142 19.4142C13.7893 19.0391 14 18.5304 14 18V16"
                stroke="#E53761"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9 12H21L18 9"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18 15L21 12"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg>
          <NuxtLink @click="logout">Logout</NuxtLink>
        </button>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
const { signOut } = useAuth();

const logout = async () => {
  try {
    await signOut();
  } catch (error) {
    console.log(error);
    await navigateTo("/login");
  }
};
</script>

<style>
nav .divider {
  margin-top: 1rem;
  margin-bottom: 1.5rem;
  border: 1px solid rgba(218, 227, 248, 1);
}

nav {
  margin-top: 3rem;
}
nav ul li {
  font-size: 0.75rem;
  font-weight: 500;
  font-stretch: condensed;
  color: rgba(11, 28, 51, 0.9);
  padding: 0.5rem 1rem 0.5rem 1rem;
  border-radius: 12px;
  margin-left: 0.4rem;
}
nav ul li:hover,
.router-link-active li {
  background-color: rgba(55, 136, 229, 1);
  color: white;
}
nav ul li svg {
  display: inline;
  margin-right: 0.3rem;
  stroke: rgba(11, 28, 51, 0.9);
}
nav ul li:hover > svg,
.router-link-active svg {
  stroke: white;
}

nav .menu-title {
  font-style: normal;
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 140%;
  color: #0b1c33;
  opacity: 0.7;
  margin-bottom: 0.7rem;
}

.web-logo img {
  max-height: 21px;
  max-width: 100px;
}

.btn-logout {
  position: absolute;
  bottom: 1%;
  padding: 12px 24px;
  color: rgba(229, 55, 97, 1);
  font-size: 0.7rem;
}

.btn-logout svg {
  stroke: rgba(229, 55, 97, 1);
  display: inline;
  margin-right: 0.3rem;
}

.is_active {
  background-color: rgba(55, 136, 229, 1);
  color: white;
}
</style>

width="20" height="20"
