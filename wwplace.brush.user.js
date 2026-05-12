// ==UserScript==
// @name         WW Place AutoBrush V2
// @namespace    http://tampermonkey.net/
// @version      1337V2
// @description  Зажал W и ебашиш как угарелый нах | кобивайт сосёт хуй
// @author       the_reaperess
// @icon         https://i.imgur.com/i0JueNb.jpeg
// @match        *://wplace.live/*
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/Reaperess/WWplace-Auto-Brush/main/wwplace.brush.user.js
// @updateURL    https://raw.githubusercontent.com/Reaperess/WWplace-Auto-Brush/main/wwplace.brush.meta.js
// ==/UserScript==
// Почему львы бывают только в полоску, а не в клетку...
// Почему я это делаю, если я мог просто пойти нахуй...
// Мать Габена шлюха кстати

(function() {
    'use strict';

    let Qelix = false;
    let Reaper = false;

    let RLock = false;
    let RAxis = null; // 'x' или 'y'
    let RFixedX = 0;
    let RFixedY = 0;

    let lastKobywhiteePidorX = 0, lastKobywhiteePidorY = 0;
    let lastRawKobywhiteePidorX = 0, lastRawKobywhiteePidorY = 0;
    let haveRaw = false;


    // АХТУНГ НАХУЙ!!
    // ЕСЛИ ПОЯВЛЯЕТСЯ БАГ, ЧТО ПИКСЕЛИ НЕ ТЕ/ЗАМЕНЯЮТСЯ ПРОШЛЫЕ ПИКСЕЛИ
    // МЕНЯЕМ ЗНАЧЕНИЕ ПЕРВОГО НА 10. ЕСЛИ ВСЁ ТАКЖЕ ЕСТЬ ПРОБЛЕМЫ, 15/5 САМЫЕ МЕДЛЕННЫЕ
    // НО САМЫЕ СТАБИЛЬНЫЕ. ЕСЛИ ВАЩЕ ЧТО ПИЗДА ЕБАШИМ 25/5 НАХ
    // ПОСЛЕ ИЗМЕНЕНИЯ: ФАЙЛ > СОХРАНИТЬ > Ф5 НА WPLACE И ЗАГРУЖАЕМ ОВЕРЛЕЙ ЗАНОВО
    // СПАСИБО ЗА ВНИМАНИЕ

    const PIPETTE_PAUSE = 0;
    const NEXT_PIXEL_PAUSE = 0;

    function sendMouseEvent(type, button, KobywhiteePidorX, KobywhiteePidorY) {
        const AkvalangPidor = document.querySelector('.maplibregl-canvas');
        if (!AkvalangPidor) return;
        const NikitaPidor = {
            bubbles: true,
            cancelable: true,
            clientX: KobywhiteePidorX,
            clientY: KobywhiteePidorY,
            button: button,
            buttons: button === 0 ? 1 : (button === 1 ? 4 : 0),
            pointerId: 1,
            pointerType: 'mouse'
        };
        AkvalangPidor.dispatchEvent(new PointerEvent('pointerdown', NikitaPidor));
        AkvalangPidor.dispatchEvent(new MouseEvent('mousedown', NikitaPidor));
        AkvalangPidor.dispatchEvent(new PointerEvent('pointerup', NikitaPidor));
        AkvalangPidor.dispatchEvent(new MouseEvent('mouseup', NikitaPidor));
        if (button === 0) {
            AkvalangPidor.dispatchEvent(new MouseEvent('click', NikitaPidor));
        }} // я пидорас :D

    async function processPixel(KobywhiteePidorX, KobywhiteePidorY){
        if (Reaper) return;
        Reaper = true;
        sendMouseEvent('mousedown', 1, KobywhiteePidorX, KobywhiteePidorY);
        await new Promise(NikitaGay => setTimeout(NikitaGay, PIPETTE_PAUSE));
        if (Qelix || RLock) {
            sendMouseEvent('mousedown', 0, KobywhiteePidorX, KobywhiteePidorY);
        }
        await new Promise(NikitaGay => setTimeout(NikitaGay, NEXT_PIXEL_PAUSE));
        Reaper = false;
    }

    window.addEventListener('keydown', (MamaGabena) => {
        if (MamaGabena.code === 'KeyW' && !Qelix) {
            Qelix = true;
        }
        if (MamaGabena.code === 'KeyR' && !RLock) {
            RLock = true;
            RAxis = null;
            haveRaw = false;
        }}); // БЛЯ ПОД ЧЕМ Я ПИШУ НАХУЙ, УЕБИТЕ МЕНЯ КУВАЛДОЙ

    window.addEventListener('keyup', (MamaGabena) => {
        if (MamaGabena.code === 'KeyW') {
            Qelix = false;
            Reaper = false;
            lastKobywhiteePidorX = 0; lastKobywhiteePidorY = 0;
        }
        if (MamaGabena.code === 'KeyR') {
            RLock = false;
            RAxis = null;
            Reaper = false;
            haveRaw = false;
            lastKobywhiteePidorX = 0; lastKobywhiteePidorY = 0;
        }});

    window.addEventListener('mousemove', (MamaGabena) => {
        lastRawKobywhiteePidorX = MamaGabena.clientX;
        lastRawKobywhiteePidorY = MamaGabena.clientY;

        if (!Qelix && !RLock) return;
        if (Reaper) return;

        let KobywhiteePidorX = MamaGabena.clientX;
        let KobywhiteePidorY = MamaGabena.clientY;

        if (RLock) {
            if (!haveRaw) {
                haveRaw = true;
            } else if (RAxis === null) {
                const dx = Math.abs(KobywhiteePidorX - lastKobywhiteePidorX);
                const dy = Math.abs(KobywhiteePidorY - lastKobywhiteePidorY);

                if (dx > dy) {
                    RAxis = 'x';
                    RFixedY = KobywhiteePidorY;
                } else if (dy > dx) {
                    RAxis = 'y';
                    RFixedX = KobywhiteePidorX;
                }
            }

            if (RAxis === 'x') {
                KobywhiteePidorY = RFixedY;
            } else if (RAxis === 'y') {
                KobywhiteePidorX = RFixedX;
            }
        }

        lastKobywhiteePidorX = KobywhiteePidorX; //Qelix иди нахуй <3
        lastKobywhiteePidorY = KobywhiteePidorY;
        processPixel(KobywhiteePidorX, KobywhiteePidorY);
    }, { passive: true });

    console.log("НАХУЙ ТЫ КОНСОЛЬ ПРОВЕРЯЕШЬ ЕБЛАН ИДИ РИСУЙ ПИКСЕЛИ, WW НАХ");
})();
