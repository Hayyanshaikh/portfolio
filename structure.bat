@echo off
echo Creating Next.js portfolio structure...

REM =========================
REM APP FOLDER
REM =========================
mkdir app
type nul > app\layout.tsx
type nul > app\page.tsx

REM =========================
REM COMPONENTS FOLDER
REM =========================
mkdir app\components
type nul > app\components\Navbar.tsx
type nul > app\components\Hero.tsx
type nul > app\components\Summary.tsx
type nul > app\components\Experience.tsx
type nul > app\components\Skills.tsx
type nul > app\components\Projects.tsx
type nul > app\components\Testimonials.tsx
type nul > app\components\Contact.tsx
type nul > app\components\Footer.tsx

REM =========================
REM GLOBAL CSS
REM =========================
type nul > app\globals.css

echo Structure created successfully!
pause