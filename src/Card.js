import React from "react";
import './Card.css'
import personnel from './image/zones/personnel.png'
import stellar_mode from './image/competence/STELLAR_MODE.PNG'

export default function Card({ text }) {
  return (
    <div id="Mode-stellaire" class="card SOLARIAN">
      <input type="checkbox" class="no-print" readonly="readonly" />
      <div class="face front">
        <div class="head">
          <div class="name VF">Mode stellaire</div>
          <div class="name VO">(Stellar mode)</div>
          <div class="code SOLARIAN"></div>
        </div>
        <div class="image">
          <img src={stellar_mode} />
        </div>
        <div class="conditions">
          <div class="incantation">
            <div class="parametre align">
              <div class="nom">Equilibre stellaire</div>
              <div class="points">:</div>
              <div class="valeur">
                <div class="checkbox ">
                  <input type="checkbox" />
                </div>
              </div>
            </div>
          </div>
          <div class="zone">
            <img src={personnel} />
          </div>
        </div>
        <div class="resume x-small">
          <div class="block ">
            <div class="ligne space">
              Les forces stellaires auxquelles vous pouvez faire appel sont
              synchronisées soit avec les photons (représentant la chaleur, la
              lumière et le plasma émis par les étoiles), soit avec les
              gravitons (représentant la force gravitationnelle des étoiles qui
              leur permettent d’attirer les corps et de les emprisonner.
            </div>
            <div class="ligne ">
              L’ultime manifestation de la puissance des photons est la
              supernova.
            </div>
            <div class="ligne ">
              L’ultime manifestation de la puissance des gravitons est le trou
              noir.
            </div>
          </div>
        </div>
      </div>
      <div class="face back">
        <div class="body xx-small">
          <div class="ligne space">
            L’équilibre entre ces deux forces cosmiques opposées est la source
            de votre pouvoir et les modes stellaires représentent votre lien
            avec l’une ou l’autre de ces forces, ou les deux, un lien fluctuant
            en fonction de l’utilisation de vos révélations stellaires.
          </div>
          <div class="ligne space">
            Quand vous êtes en combat, vous accédez à un état d’alignement
            métaphysique avec les puissances cosmiques. Au début de votre
            premier tour de combat, si vous êtes conscient, vous devez opter
            pour un de ces trois modes : graviton, photon ou désynchronisé (voir
            ci-dessous). Si vous choisissez le mode graviton ou photon, vous
            gagnez 1 point d’harmonisation dans ce mode. Au début de chaque tour
            de combat suivant, soit vous conservez votre mode stellaire actuel,
            soit vous devenez désynchronisé. Si vous choisissez de conserver
            votre mode, vous gagnez un nouveau point d’harmonisation pour ce
            mode. Tant que vous avez 1 ou 2 points d’harmonisation dans un mode,
            vous êtes synchronisé avec ce mode. Une fois que vous avez 3 points,
            vous êtes harmonisé avec ce mode. Certaines de vos révélations
            stellaires sont des révélations ultimes qui ne peuvent être
            utilisées que si vous êtes harmonisé à un mode. Quand vous êtes
            harmonisé, vous ne pouvez gagner d’autres points d’harmonisation
            pour ce mode mais vous demeurez harmonisé jusqu’à la fin du combat,
            jusqu’à ce que votre mode stellaire se termine ou jusqu’à ce que
            vous soyez désynchronisé. Si vous choisissez d’être désynchronisé,
            vous perdez tous les points d’harmonisation que vous aviez acquis.
            Au début de votre prochain tour, vous pouvez opter pour un nouveau
            mode stellaire ou rester désynchronisé. À la fin d’un combat, votre
            mode stellaire se termine. Si vous perdez connaissance au cours
            d’une rencontre, vous êtes désynchronisé. Si vous reprenez
            connaissance et que la menace est toujours présente, vous pouvez
            choisir un mode stellaire dès votre premier tour après votre réveil
            comme si c’était votre premier round de combat. Si le combat se
            termine avant que vous ayez repris connaissance, votre mode
            stellaire s’achève. Si vous n’aviez pas choisi de mode stellaire,
            pour une raison ou pour une autre, vous êtes considéré comme
            désynchronisé en ce qui concerne vos révélations stellaires. Quand
            vous n’êtes pas en combat, vous ne pouvez avoir recours à un mode
            stellaire. Ce pouvoir ne se manifeste que dans des situations
            critiques au cours desquelles votre entraînement prend le dessus et
            connecte votre esprit à l’univers. Il est nécessaire que vous
            couriez un danger pour que votre mode stellaire s’active, vous devez
            donc être confronté à un ennemi majeur. S’il y a un doute pour
            savoir si oui ou non vous pouvez avoir recours à vos modes, c’est au
            MJ de trancher. Cela signifie aussi que votre mode stellaire peut se
            terminer avant la fin de ce qui était à l’origine un combat
            dangereux, quand il ne reste plus que des adversaires mineurs contre
            lesquels vous ne craignez rien.
          </div>
        </div>
      </div>
    </div>
  );
}
