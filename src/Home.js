import React from 'react';
import gibbs from './assets/gibbs.jpg';
import abby from './assets/abby.jpg';
import bishop from './assets/bishop.jpg';
import tony from './assets/tony.jpg';
import mcgee from './assets/mcgee.jpg';
import toress from './assets/toress.jpg';
import ziva from './assets/ziva.jpg';

export const Home = () => (
  <div>
        <hr />
        <p><img src={gibbs} class="img-thumbnail" alt="Gibbs" /></p>
        <h2>Leroy Jethro Gibbs</h2>
        <p>Leroy Jethro Gibbs (AKA Gunnery Sergeant Alvin Thomas or Leland Robert Spears) is a former Gunnery Sergeant in the United States Marine Corps who is now an NCIS Special Agent assigned to the Navy Yard in Washington D.C. and who is also the current leader of the main NCIS Major Case Response Team.</p><hr />
        <p><img src={tony} class="img-thumbnail" alt="tony" /></p>
        <h2>Anthony DiNozzo Junior</h2>
        <p>Anthony (Tony) D. DiNozzo Jr., (or (Junior) by his father, Anthony DiNozzo Senior or Very Special Agent Anthony DiNozzo) was the Senior Field Agent on the NCIS Major Case Response Team led by Leroy Jethro Gibbs with Tony also serving as the second-in-command of the team.</p><hr />
        <p><img src={mcgee} class="img-thumbnail" alt="mcgee" /></p>
        <h2>Timothy McGee</h2>
        <p>Timothy (Tim) Farragut McGee is an NCIS Special Agent and also the current Senior Field Agent assigned to the main NCIS Major Case Response Team in the Navy Yard Washington D.C. with the team under the command of Special Agent Leroy Jethro Gibbs.</p><hr />
        <p><img src={ziva} class="img-thumbnail" alt="ziva" /></p>
        <h2>Ziva David</h2>
        <p>Ziva David (surname primarily pronounced dah-VEED) was a former Israeli Mossad officer and former NCIS Special Agent who was originally assigned to NCIS as a Liaison Officer for Mossad, beginning her tenure as a NCIS/Mossad Liaison Officer in September/October 2005 following the murder of her predecessor, NCIS Special Agent Caitlin Todd at the hands of Ziva's half-brother, Ari Haswari.</p><hr />
        <p><img src={bishop} class="img-thumbnail" alt="bishop" /></p>
        <h2>Eleanor Bishop</h2>
        <p>Eleanor Raye (Ellie) Bishop is a former analyst for the NSA and who is now a Special Agent with NCIS.With her mission being preemptive terror analysis where she had to predict and also pinpoint who the up and coming threats were, Bishop became the first person to officially recognize terrorist Benham Parsa as a potential threat. She then devoted six years of her NSA career to hunting Parsa with Bishop's determination to find Parsa slowly becoming an obsession.</p><hr />
        <p><img src={toress} class="img-thumbnail" alt="toress" /></p>
        <h2>Nicholas Torres</h2>
        <p>Nicholas (Nick) Torres is an NCIS Special Agent who is also a member of the main NCIS Major Case Response Team led by NCIS Special Agent Leroy Jethro Gibbs.</p><hr />
        <p><img src={abby} class="img-thumbnail" alt="abby" /></p>
        <h2>Abigail Sciuto</h2>
        <p>Abigail (Abby) Sciuto is the former Chief Forensic Scientist for the NCIS Major Case Response Team.</p><hr />
      </div>
)
