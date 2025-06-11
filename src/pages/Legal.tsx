import React from 'react';
import Layout from '../components/layout/Layout';

const Legal: React.FC = () => {
  return (
    <Layout pageTitle="Legal & Terms" showCTA={false}>
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              
              {/* Website Materials */}
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
                <h2 className="text-2xl font-bold text-primary-900 mb-4">Website Materials</h2>
                <h3 className="text-xl font-semibold text-primary-900 mb-4">Contract Terms and Conditions</h3>
                <p className="text-gray-700 mb-4">
                  We at Redfluer Limited (company registration number 16448519) of 45 Broad Lane, London, N15 4DJ are in the business of providing services to assist hirers and employers with the introduction of temporary, contractor or permanent staff
                </p>
              </div>

              {/* Introduction and Acceptance */}
              <div className="bg-white p-6 rounded-lg border border-gray-200 mb-8">
                <h3 className="text-xl font-semibold text-primary-900 mb-4">Introduction and Acceptance</h3>
                <p className="text-gray-700 mb-4">
                  This Client Services Agreement ('CSA') comprises the framework terms and conditions upon which we conduct business 'these Terms' and consists of CSA - Part 1, which sets out our primary terms and rates, and CSA - Part 2 which embodies our standard main terms.
                </p>
                <p className="text-gray-700 mb-4">
                  Once you have received this CSA, any act by you of accepting or requesting services from us or using in any way information from us relating to a Candidate, is deemed to be and shall constitute your acceptance of these Terms which then apply.
                </p>
                <p className="text-gray-700">
                  You may view our Privacy Notice at www.refluerrecruitment.co.uk
                </p>
              </div>

              {/* Terms and Conditions */}
              <div className="bg-white p-6 rounded-lg border border-gray-200 mb-8">
                <h3 className="text-xl font-semibold text-primary-900 mb-4">The terms and conditions for our services are as follows:</h3>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>1.</strong> Our primary service function is to locate, introduce and/or engage with suitable candidates for you to employ generally or take on temporary basis or a fixed term to meet your requirements. Candidates may be individuals for temporary or permanent hire, temp agency workers or contractors depending on your needs. If you require any alternative services, we will be happy to discuss with you but please note these may be subject to different terms.</p>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>2.</strong> Account manager(s) will be assigned to act as our point of contact to liaise with you. (Please direct any question concerning a Requirement or Candidate to an account manager).</p>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>3.</strong> Except where we have agreed a specific chargeable item, for example, an advertising campaign or a different or specific service or for Expenses, we only charge fees where we Introduce Candidates that you use in some way. Please note, we are entitled to our Fee for an Introduction regardless of the role, tasks or purpose for which you use a Candidate.</p>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>4.</strong> Although we are entitled to charge a Fee wherever there is an Engagement following our Introduction, the normal default period is 9-12 months</p>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>5.</strong> We rely on the information you give to us so that we can provide the best outcome for you. It is important that you give us all the information necessary for every placement and we will advise you on what we need from time to time. To avoid any misunderstanding it is also important that you keep us promptly informed of your intentions in relation to Candidates we Introduce. For example, if you are already considering a person we introduce as a Candidate for engagement at the time we provide you with details of that person you should let us know immediately and in any event within 3 working days from the time we provide details of the person.</p>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>6.</strong> Candidates we supply on a temporary basis are engaged by us on a contract for services unless we inform you otherwise. As the Candidate's relationship is with us and you are not intended to be the Candidate's employer, save for providing the Candidate with required information related to the work being done, you should refer any questions and relationship matters to us, not to the Candidate.</p>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>7.</strong> Our Fees depend on the type of service provided and are calculated using the Fee Scales overleaf. Except for Temp Supply or where otherwise agreed, the Fees are calculated as a percentage of total Remuneration.</p>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>8.</strong> The intervals at which we normally raise invoices (Invoicing Intervals) for a margin only Temp Placement is weekly, for a Temp Supply is weekly. You must validate work done where there is a Temp Supply at the end of each week (Validation Period).</p>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>9.</strong> You are ultimately responsible for ascertaining suitability and checking the Candidate's work and performance, and so, whilst we accept liability for our own negligence and where required by law, we do not accept liability for the work done by a Candidate in any circumstances. Our liability excludes indirect loss, is subject to a cap of £1m, unless otherwise required by law, in the case of a Temp Supply is limited to one month's Fee under the Assignment, and in the case of a Temp Placement is limited to our charge for one month.</p>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>10.</strong> If your employment of a Candidate ends within the stated period in the Refund Scale (see below), we shall repay a proportion of the Fee ('Refund') in accordance with the Refund Scale provided all the Refund Conditions below apply. A Refund is due 14 days after all Refund Conditions have been satisfied. No Refund is due if any Refund Condition is not met.</p>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>11.</strong> The Refund Conditions are:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>(a) the arrangement in respect of which the Refund is claimed was a Perm Placement agreed with us</li>
                      <li>(b) no later than 3 working days after the date on which one party to the employment informs the other of the decision to terminate, time being of the essence, you inform us in writing
                        <ul className="list-disc pl-6 mt-1 space-y-1">
                          <li>(i) of the fact and date of the decision and the date of actual termination</li>
                          <li>(ii) whether the decision was made by you or the Candidate and the reason for the decision to terminate, with a copy of any written notice of termination, and</li>
                          <li>(iii) that you wish to claim a Refund</li>
                        </ul>
                      </li>
                      <li>(c) the employment was not ended by reason of redundancy but was ended
                        <ul className="list-disc pl-6 mt-1 space-y-1">
                          <li>(i) by you, by reason of the fact that the Candidate was wholly unsuitable for the position taken up ('the Role') arising from matters that you became aware of since the employment commenced, not being matters that you should reasonably have become aware of prior to commencement of the employment, or</li>
                          <li>(ii) by the Candidate, other than because of your act or omission which amounted to a breach of your obligations to the Candidate</li>
                        </ul>
                      </li>
                      <li>(d) prior to the Perm Placement you have not used the Candidate in any capacity, whether working direct for you, by supply through us, or otherwise</li>
                      <li>(e) you provided us with full and correct information relevant to the Role and the Candidate was employed in the Role as described</li>
                      <li>(f) you are not in breach of these Terms</li>
                      <li>(g) you have first paid the relevant Fees in accordance with the Payment Terms, time being of the essence.</li>
                    </ul>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>12.</strong> It is an additional Refund Condition that at the same time as claiming the Refund you make a written request for us to seek a replacement Candidate for the Role, in which event the following process shall apply:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>(a) we may in good faith seek to Introduce a replacement Candidate within 28 days, or such longer period as you agree</li>
                      <li>(b) you cooperate in good faith with our effort</li>
                      <li>(c) unless a Candidate so Introduced is demonstrably not suitable for the Role and within 7 days of the Introduction you provide us with proper reasons for rejection, the Introduction shall be deemed to be a replacement for the Introduction of the first Candidate and your entitlement to a Refund shall cease</li>
                      <li>(d) if we notify you that we are, or consider we may be, unable to Introduce a Candidate in compliance with these arrangements, or we are unable to Introduce a replacement within the period referred to in sub paragraph (a), a Refund shall then be due</li>
                      <li>(e) nothing in this clause removes your obligation to pay us a Fee in accordance with these Terms if you Engage a proposed replacement Candidate you have informed us has been rejected.</li>
                    </ul>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>13.</strong> You agree to promptly repay a Refund if, within 12 months of your Refund claim, you re-Engage the relevant Candidate or if the Refund was not properly due to you.</p>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>14.</strong> Where you employ a Candidate and have kept us informed of your decision to employ, we agree not to solicit the Candidate to take up employment elsewhere for the period of 12 months except where any of the Non-Solicit Conditions apply. Contact of a general, automated, or inadvertent nature (for example, by reason of connection with or inclusion on social media or a mailing list) shall not amount to soliciting.</p>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>15.</strong> The Non-Solicit Conditions are:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>(a) you are in breach of these Terms</li>
                      <li>(b) the employment has ended for any reason, the embargo ceasing upon the giving of notice of termination</li>
                      <li>(c) you did not provide us with full and correct information relevant to the Assignment</li>
                      <li>(d) you have agreed we may help the Candidate find other work.</li>
                    </ul>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>16.</strong> In the case of a Temp Supply initially agreed to continue for more than one week, if you advise us on the first day that the Candidate is unsuitable, we shall only charge you the Total Cost for the Candidate – see Fees 3.</p>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>17.</strong> If you are not satisfied with a Candidate we supply for an ongoing Requirement you agree to give us reasonable time to find and supply a suitable alternative Candidate.</p>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>18.</strong> Wherever there is an increase in Remuneration within 12 months of commencement of an Engagement, including due to increased hours, we shall be entitled to raise a further invoice for our Fee reflecting the increase.</p>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>19.</strong> IR35 tax. If we advise you that a Candidate operates through a company or partnership to which the off payroll tax rules set out in Chapter 10 of Part 2 of ITEPA may apply you must provide us either with an SDS, namely a status determination statement in the form required pursuant to the OPR or an OPR Exempt Statement, namely that the OPR do not apply because you are either a small company or you have no UK connection. Your statement to us in either case may affect the rates upon which we can provide the supply.</p>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>20.</strong> NOT IN USE</p>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>21.</strong> Fees and Expenses are payable within 7 days from the date of our invoice save for Engagements of which we are not informed in advance for which our Fees are payable within 14 days of the Engagement. We may charge a sum not exceeding £750 + VAT for our administration charge in recovering any sum overdue for more than one month.</p>
                  </div>
                </div>
              </div>

              {/* Fee Scales */}
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
                <h3 className="text-xl font-semibold text-primary-900 mb-4">Fee Scales</h3>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>1 – Fee Scale for Perm Placements and Engagements except where otherwise specified</strong></p>
                    <p className="text-gray-700 ml-4">Our fee, being a percentage of that total remuneration is 30%</p>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>2 – Fees for a Temp Placement (where you hire and pay the Candidate)</strong></p>
                    <p className="text-gray-700 ml-4">30% of the sum that you pay to the Candidate for the period of hire as specified by us for each hire.</p>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>3 – Fees for Temp Supply</strong></p>
                    <p className="text-gray-700 ml-4">Where we supply the Candidate, our Fee is calculated on time spent at the rate specified and agreed by us for the Assignment from time to time. Our Fee is based upon the total of the cost to us of engaging and supplying the Candidate whether calculated with reference to a Candidate or all or part of our business (including statutory payments we make to or relating to the Candidate) ('Total Cost') plus our charge ('Charge') which, unless otherwise agreed in writing, shall be calculated as a percentage of Total Cost. Note: Fees may increase if costs increase.</p>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>4 – Transfer Fee for Engagements following our supply of the Candidate</strong></p>
                    <p className="text-gray-700 ml-4">The higher of 25% of Remuneration, or a fee charged under Fees 1, chargeable if there is an Engagement within the relevant Transfer Period of a Candidate we have supplied.</p>
                    <p className="text-gray-700 ml-4">In certain circumstances instead of paying us a Transfer Fee you may have an option to take the supply of the Candidate through us. Please see Section 8 of the Main Client Terms. A Fee based on Fees 1 is payable in the case of an Engagement of a Candidate we have Introduced, but not actually supplied, for any purpose.</p>
                  </div>
                </div>
              </div>

              {/* Refund Scale */}
              <div className="bg-white p-6 rounded-lg border border-gray-200 mb-8">
                <h3 className="text-xl font-semibold text-primary-900 mb-4">Refund Scale</h3>
                <p className="text-gray-700 mb-4">The Refund shall be the amount equivalent to the percentage of Fee shown in the scale below, the percentage of Fee depending upon the date employment ends, the lowest percentage always applying:</p>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-gray-300">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="border border-gray-300 px-4 py-2 text-left">Employment ends</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Percentage of Fee</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">in the first 2 weeks</td>
                        <td className="border border-gray-300 px-4 py-2">100%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">3 - 6 weeks</td>
                        <td className="border border-gray-300 px-4 py-2">75%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">7 - 10 weeks</td>
                        <td className="border border-gray-300 px-4 py-2">50%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Definitions */}
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
                <h3 className="text-xl font-semibold text-primary-900 mb-4">Definitions</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-3">
                    <div>
                      <p className="font-semibold text-gray-900">Additional Service</p>
                      <p className="text-gray-700">an additional specific service, which may be ancillary to or as part of the Services or which may relate to other business, which we provide to you following your request</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold text-gray-900">Agency Worker</p>
                      <p className="text-gray-700">an agency worker as defined above at R.3 of the AWR</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold text-gray-900">Assignment</p>
                      <p className="text-gray-700">an Engagement - in respect of which details have been negotiated and agreed through us or in respect of which you have kept us informed in advance of commencement, being either a Perm Placement, a Temp Placement or a Temp Supply, and references to Assignment shall include the period of a Temp Placement or a Temp Supply</p>
                      <p className="text-gray-600 text-xs mt-1">NOTE: an Engagement which you do not agree with us in advance is not an Assignment</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold text-gray-900">AWR</p>
                      <p className="text-gray-700">the Agency Workers Regulations 2010 and any related regulations</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold text-gray-900">Candidate</p>
                      <p className="text-gray-700">any person, whether presenting as an individual, a contractor, an interim manager, whether self-employed or otherwise, and/or a limited company through which a person is offering services, or a supplier company, in respect of whom or which, or in respect of whose skills or services, information is provided to you by us</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold text-gray-900">Cessation Event</p>
                      <p className="text-gray-700">an event of insolvency within the meaning of the Insolvency Act 1986, the appointment of a receiver or an administrator, notice of intention to appoint an administrator, the making of a winding up order, entering or proposing to enter into a Company Voluntary Arrangement or similar arrangement or composition with creditors, the passing of a resolution to cease trading or actual cessation of trading</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold text-gray-900">Charge</p>
                      <p className="text-gray-700">the amount defined as 'Charge' in the CSA at Fees 3</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold text-gray-900">CIS</p>
                      <p className="text-gray-700">Her Majesty's Revenue and Customs ('HMRC') Construction Industry Scheme</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold text-gray-900">Comparator Terms</p>
                      <p className="text-gray-700">the pay and basic working and employment conditions as set out in R.6 of the AWR that are ordinarily in force within your business, and which would have been applicable had the Candidate been engaged directly by you to do the same job on the first day of the Temp Supply</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold text-gray-900">Conduct Regulations</p>
                      <p className="text-gray-700">the Conduct of Employment Agencies and Employment Businesses Regulations 2003</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold text-gray-900">Connected Person</p>
                      <p className="text-gray-700">a person with whom we conduct business, being (a) a subsidiary company (as defined by s.1159 Companies Act 2006) or associated bodies corporate (as defined by s.256 Companies Act 2006) of yours, or (b) a business (whether corporate or unincorporated)</p>
                      <ul className="list-disc pl-4 mt-1 text-xs">
                        <li>(i) which is a member of, director of, or partner in, your company or business, or</li>
                        <li>(ii) of which you are a member, or director or partner, or</li>
                        <li>(iii) for which either you or a representative of yours is authorised by you (whether expressly or impliedly) to undertake work (other than solely in a professional capacity), or</li>
                        <li>(iv) which has a director or shareholder in common with you</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <p className="font-semibold text-gray-900">CSA</p>
                      <p className="text-gray-700">the specific document headed 'Client Services Agreement' which we have sent to you and which comprises part of these Terms</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold text-gray-900">Day 1 Rights</p>
                      <p className="text-gray-700">rights under the AWR which a hirer must apply to an Agency Worker from the first day of an assignment, under R.12 (right to shared facilities) and under R.13 (right to be informed of relevant job opportunities in the same way as directly recruited comparable workers)</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold text-gray-900">Data Laws</p>
                      <p className="text-gray-700">data protection legislation applicable from time to time in the UK and use herein of 'Personal Data', 'Controller', 'Processor' and 'Data Subject' shall have the respective meanings defined therein</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold text-gray-900">End User</p>
                      <p className="text-gray-700">any third party to whom you provide information concerning a Candidate following an Introduction and for whose benefit the Candidate provides any services and any associate (as defined by s.435 Insolvency Act 1986) of that third party</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold text-gray-900">Engagement</p>
                      <p className="text-gray-700">an engagement, arrangement or employment, of any description (including as defined by s.13(1)(a) of the Employment Agencies Act 1973) under an Assignment or otherwise, whether direct or indirect, express or implied, including an Offer, under which a Candidate is due to provide or provides any services for your benefit or for the benefit of, or to, an End User including, but not limited in meaning to, an engagement or employment which is temporary or permanent in nature or through the intermediary of a limited company or by contract through a third party, the date of which shall be deemed to be the earlier of the date of an agreement to Engage or the date of commencement of any services under an Engagement, and 'Engage' and 'Engaged' shall have corresponding meaning</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold text-gray-900">Expenses</p>
                      <p className="text-gray-700">any expenses you have agreed to pay</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold text-gray-900">Fees</p>
                      <p className="text-gray-700">the payment due for the Services and 'Fee' shall have corresponding meaning</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold text-gray-900">Fee Period</p>
                      <p className="text-gray-700">the longer of (a) any time after an Introduction where the Introduction was the effective cause of the Engagement, or (b) the default period of 9 months, or such other default period (if any) specified in the CSA, after any of</p>
                      <ul className="list-disc pl-4 mt-1 text-xs">
                        <li>(i) an Introduction relating to the Candidate</li>
                        <li>(ii) the end of negotiations relating to an Introduced Candidate</li>
                        <li>(iii) the last day of an Assignment of the Candidate</li>
                      </ul>
                    </div>
                    
                    <div>
                      <p className="font-semibold text-gray-900">Fee Scales</p>
                      <p className="text-gray-700">as set out in the CSA and references to Fees are references to the Fees described therein</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold text-gray-900">Introducer</p>
                      <p className="text-gray-700">an employment agency as referred to in the Conduct Regulations</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold text-gray-900">Introduction</p>
                      <p className="text-gray-700">the provision of information by us or by a Candidate, whether such information includes the Candidate's name, that enables you to identify a Candidate or relating to a Candidate already identified, and 'Introduce' and 'Introduced' shall have corresponding meaning</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-3">
                    <div>
                      <p className="font-semibold text-gray-900">Invoicing Intervals</p>
                      <p className="text-gray-700">the intervals at which we normally invoice in respect of a Temp Placement or Temp Supply as specified in the CSA</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold text-gray-900">ITEPA</p>
                      <p className="text-gray-700">the Income Tax (Earnings and Pensions) Act 2003</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold text-gray-900">Offer</p>
                      <p className="text-gray-700">an offer to engage the Candidate other than for Temp Placement or Temp Supply communicated either by you or us at your request and which is accepted by the Candidate</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold text-gray-900">OPR</p>
                      <p className="text-gray-700">the off-payroll tax rules set out in Chapter 10 of Part 2 of ITEPA</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold text-gray-900">OPR Exempt</p>
                      <p className="text-gray-700">where the OPR do not apply because you are either a small company or you have no UK connection</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold text-gray-900">Opt Out Notice</p>
                      <p className="text-gray-700">a notice of opt out under R.32(9) of the Conduct Regulations</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold text-gray-900">Party</p>
                      <p className="text-gray-700">you or us, together referred to as 'Parties'</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold text-gray-900">Payment Terms</p>
                      <p className="text-gray-700">the payment terms set out in the CSA or otherwise agreed in writing signed by a director of ours</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold text-gray-900">Perm Placement</p>
                      <p className="text-gray-700">an Assignment where the Candidate is Engaged by you or an End User for regular employment, whether on a full or part time basis, not being a Temp Placement or a Temp Supply</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold text-gray-900">Privacy Notice</p>
                      <p className="text-gray-700">our privacy notice made pursuant to the Data Laws from time to time</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold text-gray-900">PSC</p>
                      <p className="text-gray-700">an intermediary which meets or is treated as meeting the conditions in s.61N(9)-(11) of the OPR</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <p className="font-semibold text-gray-900">PSC Services</p>
                      <p className="text-gray-700">the services provided by a PSC under an Assignment</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold text-gray-900">Remuneration</p>
                      <p className="text-gray-700">any payment for the services of the Candidate under an Engagement calculated in accordance with Section 3</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold text-gray-900">Representative</p>
                      <p className="text-gray-700">an individual who is a Candidate representing and working for a PSC in the provision of the PSC Services</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold text-gray-900">Requirement</p>
                      <p className="text-gray-700">a request from you in any form (whether oral or otherwise) for our Services</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold text-gray-900">R.5 Rights</p>
                      <p className="text-gray-700">the rights an Agency Worker has to the same terms and conditions in force in your business relevant to others doing the same job, as set out in R.5 AWR</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold text-gray-900">SDS</p>
                      <p className="text-gray-700">a status determination statement in the form required pursuant to the OPR</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold text-gray-900">Services</p>
                      <p className="text-gray-700">to locate, introduce and/or supply Candidates for you in accordance with your Requirements from time to time, Assignments and/or any Additional Service</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold text-gray-900">Social Media</p>
                      <p className="text-gray-700">any electronic means of processing, viewing, obtaining or exchanging information or communications about persons through use of the internet or web based technologies/applications, electronic platforms or any telephonic (mobile or otherwise) messaging system</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold text-gray-900">Special Terms</p>
                      <p className="text-gray-700">any Special Terms in the CSA</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold text-gray-900">Supplier</p>
                      <p className="text-gray-700">an employment business as referred to in the Conduct Regulations</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold text-gray-900">Tax Authority</p>
                      <p className="text-gray-700">a relevant authority, body or department responsible for collection of tax, national insurance, social security or any other charges, taxes or fees</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold text-gray-900">Temp Placement</p>
                      <p className="text-gray-700">an Assignment where the Candidate is Engaged by you or an End User on a temporary basis, not being a Perm Placement or a Temp Supply</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-3">
                    <div>
                      <p className="font-semibold text-gray-900">Temp Supply</p>
                      <p className="text-gray-700">the temporary supply to you of a Candidate who or which we employ or otherwise engage either directly or indirectly through a third party</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold text-gray-900">Total Cost</p>
                      <p className="text-gray-700">the total cost referred to in Fees 3 of the CSA</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold text-gray-900">Transfer Fee</p>
                      <p className="text-gray-700">the fee due to us provided for Introductions as referred to in Section 8</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold text-gray-900">Transfer Period</p>
                      <p className="text-gray-700">the period referred to as the Transfer Period in section 8</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold text-gray-900">Validation Period</p>
                      <p className="text-gray-700">the time interval specified in the CSA for validating work activity</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 2 */}
              <div className="bg-white p-6 rounded-lg border border-gray-200 mb-8">
                <h3 className="text-xl font-semibold text-primary-900 mb-4">Section 2 - General Obligations, Information and Introductions</h3>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>2.0</strong> We agree to use our reasonable endeavours to provide the Services. For the Conduct Regulations where your Requirement is only for the Temp Supply of a Candidate we shall be acting as a Supplier but for all other Requirements we operate as an Introducer.</p>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>2.1</strong> You agree to accept our Services and you acknowledge and agree</p>
                    <ul className="list-disc pl-6 mt-2 space-y-2">
                      <li>(a) the Conduct Regulations and other statutory obligations require us to provide specific information to each Candidate and to other authorities in relation to any Requirement; accordingly to enable us to comply with our obligations and to help us introduce a suitable candidate you must
                        <ul className="list-disc pl-6 mt-1 space-y-1">
                          <li>(i) upon issuing a Requirement or as soon as possible thereafter provide the information set out in the Schedule together with answers to any additional questions we may raise, and</li>
                          <li>(ii) prior to an Engagement promptly inform us of any additional information or any change to information already provided</li>
                        </ul>
                      </li>
                      <li>(b) to achieve a satisfactory outcome, to check that the Candidate is suitable for your purposes and that you are satisfied with the information and confirmations we have provided to you, regardless of our statutory obligations, and you agree in particular
                        <ul className="list-disc pl-6 mt-1 space-y-1">
                          <li>(i) regardless of any references or information that we may provide, to take up your own references for the Candidate and verify the experience, training and qualifications of the Candidate or other information supplied</li>
                          <li>(ii) to ensure that the Candidate has any necessary permit or authority to work for you and comply with asylum and immigration requirements relevant to an employer</li>
                          <li>(iii) to explain your requirements to the Candidate promptly on commencement of the Engagement if you have not already done so</li>
                        </ul>
                      </li>
                      <li>(c) where you need authorisation or a licence to be able to engage a Candidate or allow the Candidate to work in the position you seek to fill, your request for us to seek a Candidate shall be deemed to be your confirmation that you have all necessary authorisations and licences unless you inform us otherwise, for example where you are in the process of applying for the required authorisation</li>
                      <li>(d) to ensure that all information you provide to us is full and accurate</li>
                      <li>(e) to keep us promptly informed of your intentions in relation to an Engagement of a Candidate throughout the Fee Period.</li>
                    </ul>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>2.2</strong> We may Introduce Candidates to you regardless of any specific Requirement and for the avoidance of doubt you may Engage the Candidate for any purpose, job or role regardless of any stated initial intention. In the event that you have not already provided us with information in accordance with this Section 2, you agree to provide us with that information promptly.</p>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>2.3</strong> Transparency is important to avoid duplication of effort. Accordingly, you agree to tell us promptly if you are using any Social Media, using a third party to fill positions or you are actively considering an individual introduced from another source or already known to you, for filling a Requirement. In all cases it is your sole responsibility for checking whether a Candidate has been previously introduced by another party and for keeping us informed.</p>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>2.4</strong> If you are already, at the time we first Introduce a Candidate to you, actively considering the Candidate for Engagement such that you believe that we have no entitlement to a Fee, it is important that you notify us in writing within the notification period specified in the CSA, or, if no period is specified, within 3 working days of the earliest date upon which you are able to identify the Candidate from the information we have provided, together with clear supporting evidence of your active consideration.</p>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>2.5</strong> Wherever there is an Assignment we shall endeavour to advise you of the details as soon as possible unless, in the case of a Perm Placement, you have concluded negotiations with the Candidate direct. For the avoidance of doubt, whilst we may advise you of the details applicable to the placement of a Candidate, those details are relevant only to record rates agreed for the purposes of our Fee and your use of the Candidate but not further or otherwise.</p>
                  </div>
                </div>
              </div>

              {/* Section 3 */}
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
                <h3 className="text-xl font-semibold text-primary-900 mb-4">Section 3 – Remuneration</h3>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>3.0</strong> Remuneration referred to in the Fee Scales, for the purposes of our Fee, is calculated as follows:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-2">
                      <li>(a) subject to clause 3.0(b), the total proposed or projected sum (whichever is higher), payable by you or an End User for the benefit of the services of a Candidate under an Engagement for one calendar year from the earlier of the proposed or actual commencement of the service, together with the value attributable by HM Revenue & Customs, or for the avoidance of doubt, would be attributed by HM Revenue & Customs were the benefit subject to tax in the UK, of all taxable benefits provided under the Engagement, such value in respect of any motor vehicle being not less than £7,500</li>
                      <li>(b) calculation is on an annualised basis, so that the same payment rate or charge applicable during the period of an Engagement which is projected to be for less than a full calendar year shall be deemed to apply as if the Engagement were to continue for a full year, whether or not the Engagement continues for a full year.</li>
                    </ul>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>3.1</strong> Wherever there is an Engagement, not being a Temp Supply, for which, regardless of the circumstances, we believe (whether reasonably or otherwise) we are due a Fee, you shall within 7 days of our written request provide to us information to enable us to identify the Remuneration and other material terms of an Engagement as we may request. If you do not inform us of the relevant Remuneration within 7 days of our enquiry, or by any later date we raise an invoice, the Remuneration shall be deemed to be an amount calculated on the basis of the higher of</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>(a) the rate payable by you under the last previous Assignment, or</li>
                      <li>(b) the highest amount or rate indicated by either you or us as payable for the services sought by you, or</li>
                      <li>(c) the highest amount achievable in the market place for a person of similar experience to work in the position that has been filled - such amount shall be determined by us based upon appropriate evidence.</li>
                    </ul>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>3.2</strong> For the avoidance of doubt in the case of an Offer that is withdrawn, Remuneration shall be calculated on the projected sum and/or value contained within the Offer.</p>
                  </div>
                </div>
              </div>

              {/* Section 4 */}
              <div className="bg-white p-6 rounded-lg border border-gray-200 mb-8">
                <h3 className="text-xl font-semibold text-primary-900 mb-4">Section 4 – Fees and Invoicing Generally</h3>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>4.0</strong> You agree to pay our Fees and any Expenses in accordance with the Payment Terms without any deduction, set off or counterclaim, subject only to clauses 6.4 and 6.5.</p>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>4.1</strong> Our Fees are due and payable by you whenever you use a Candidate, an Offer is made, or we provide an Additional Service in respect of which we have agreed a Fee. For the purposes of these Terms, you 'use a Candidate' whenever there is an Engagement within the Fee Period, being where you Engage a Candidate (whether or not as an Assignment), or you introduce (by providing information or otherwise) a Candidate to an End User which enters into an Engagement of the Candidate. The date of an Engagement shall be deemed to be the earlier of the date of an agreement to Engage or the date of commencement of any services under an Engagement.</p>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>4.2</strong> Save as otherwise provided for, Fees for Engagements and Assignments and how they are calculated are set out in the Fee Scales.</p>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>4.3</strong> In the case of a Temp Placement we may as a concession ('Concession') agree to charge a single fee based on Remuneration calculated on a fixed period ('Fixed Period') of your Engagement of the Candidate instead of a Fee under Fees 2 (margin only) or under Fees 1 (for Perm Placements and Engagements), and in the event of an agreed Concession the following shall apply:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>(a) it is a condition of our agreement to accept the Concession single fee that payment is made in accordance with the Payment Terms, time being of the essence</li>
                      <li>(b) we shall raise a single invoice for the agreed fee relevant to the Fixed Period</li>
                      <li>(c) if the Engagement extends beyond the Fixed Period ('Extension') we shall be entitled to charge a further Fee charged at our sole discretion
                        <ul className="list-disc pl-6 mt-1 space-y-1">
                          <li>(i) on the same basis as the fee for the Fixed Period, for the period of the Extension, or</li>
                          <li>(ii) as a margin charge under Fees 2 for the period of the Extension and any subsequent Extensions, or</li>
                          <li>(iii) as a fee calculated under Fees 1 as if the Temp Placement were a Perm Placement at the time the Extension commences</li>
                        </ul>
                      </li>
                      <li>(d) clause 4.3(c) shall apply to each Extension in all cases save where we have charged a Fee under Fees 1</li>
                      <li>(e) you shall not be entitled to a refund or credit if the Engagement ceases before the end of the agreed fixed period, whether the Fixed Period or an Extension.</li>
                    </ul>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>4.4</strong> No Fee shall be chargeable for an Offer if, prior to commencement of a contract relating to the Offer, you withdraw the Offer for the reason that you have since come into possession of information which you have provided to us that the Candidate is wholly unsuitable for the position offered by you.</p>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>4.5</strong> Fees for any Additional Service will be agreed with you and are payable on delivery of the service or at such other time as may be agreed in writing.</p>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>4.6</strong> An Engagement during Fee Period (b) is deemed to be as a result of the relevant Introduction unless you have complied with clause 2.4; accordingly, and for the avoidance of doubt, there is no implied term that an Introduction must be the effective cause of an Engagement during Fee Period (b). Without prejudice to the foregoing, if you have complied with clause 2.4, the evidence is that our Introduction was not the effective cause of the Engagement and you have not taken any step to affirm our effort or involvement in respect of the Candidate, we shall release our Fee.</p>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>4.7</strong> For the avoidance of doubt</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>(a) where we have Introduced a Candidate your decision to Engage the Candidate based on or resulting from the use of Social Media or another source shall not disentitle us to our Fee</li>
                      <li>(b) we are entitled to a Fee for an Introduction
                        <ul className="list-disc pl-6 mt-1 space-y-1">
                          <li>(i) regardless of any arrangement for a fee or otherwise that you may have with a third party relating to the same Candidate</li>
                          <li>(ii) howsoever you Engage the Candidate regardless of the job description for which the Candidate may be Engaged, whether the position sought to be filled by you has changed, or the role or tasks to be performed or undertaken by the Candidate are different from those provided to us in respect of the Requirement.</li>
                        </ul>
                      </li>
                      <li>(c) an Introduction entitling us to our Fee in the event of your Engagement shall be deemed to exist notwithstanding that you, or a person at your request, may have initially introduced the Candidate to us for the provision of all or part of our Services to you.</li>
                    </ul>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>4.8</strong> We may issue an invoice to you</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>(a) for the relevant Fee under each Engagement upon, or as soon as is appropriate after the commencement of the Engagement, at any time after an Offer, or, as the case may be, at the Invoicing Intervals or at any times or intervals specified in these Terms or otherwise agreed</li>
                      <li>(b) for an Additional Service at the time agreed for the service, or in the absence of agreement, upon delivery of the service.</li>
                    </ul>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>4.9</strong> Whilst it is our normal practice to raise invoices for Temp Placements or Temp Supply at the Invoicing Intervals, times shall not be of the essence, our agreement to invoice shall not be subject to an implied condition that delay amounts to a waiver of any kind, and, for the avoidance of doubt, there shall be no limit save any statutory limit on the time by which we are obliged to raise a valid enforceable invoice.</p>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>4.10</strong> All Fees are subject to value added tax which shall be charged in addition and, for the purpose of calculating our Fee, Remuneration in foreign currency will be calculated at the Bank of England Sterling exchange rate applicable on the date of our invoice, or in the case of a debt otherwise due and we elect so to choose, the rate applicable on the date of actual payment.</p>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>4.11</strong> In the case of an Engagement where we are not informed in advance (i.e. there is no Assignment), unless otherwise stated in the CSA Fees are payable within 14 days of commencement of the Engagement, the sum due in respect of the Fee being a debt due to us whether or not we have submitted an invoice.</p>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>4.12</strong> Interest is due on any overdue sum calculated at the rate of 2% per month.</p>
                  </div>
                </div>
              </div>

              {/* Section 5 */}
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
                <h3 className="text-xl font-semibold text-primary-900 mb-4">Section 5 - Terms Applicable to Temp Supply of Candidates and AWR Compliance</h3>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>5.0</strong> Save to the extent qualified by Section 7, the provisions of this Section 5 and Sections 6 to 10 apply where we act as a Supplier in relation to Temp Supply.</p>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>5.1</strong> You agree as an on-going obligation throughout each Assignment to</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>(a) ensure that any equipment or vehicles provided by you for use in relation to the Temp Supply are in good order, suitable, safe and compliant with all relevant regulations and safety requirements</li>
                      <li>(b) maintain adequate insurances including, but not limited to, Employer's and Public Liability Insurance which provides cover for Candidates under Assignment</li>
                      <li>(c) ensure that the Candidate is aware of your and the End User's rules and any regulations applicable to external contractors</li>
                      <li>(d) provide such instructions and suitable facilities to the Candidate as are necessary to enable the Candidate to perform services, and to monitor performance and compliance with such instructions to the extent reasonably necessary to ensure your objectives are being achieved, but without conflicting with any other provision in these Terms</li>
                      <li>(e) allow us to suspend the services of the Candidate for the purposes of leave or sickness absence provided that we shall require the Candidate to notify you as soon as practicable of the reason for any absence</li>
                      <li>(f) refrain from discussing with the Candidate the terms of the Candidate's engagement with us, other than strictly as required for the proper objectives of the work required under the Assignment or as required by law.</li>
                    </ul>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>5.2</strong> You shall:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>(a) be responsible for the behaviour of other persons utilised by you to the extent such actions may give rise to a claim by the Candidate of unlawful treatment, and</li>
                      <li>(b) in the event of a complaint or a claim referred to in clause 5.2(a), promptly investigate and take such action as is necessary to stop any unlawful treatment</li>
                    </ul>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>5.3</strong> You acknowledge and agree that</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>(a) the Candidate is not intended to be nor is, during an Assignment, an employee of yours and that there is no obligation on any party to perform or provide work for any specific period</li>
                      <li>(b) you have selected the Candidate due to the Candidate's skill, expertise and experience relevant to the work required under the Assignment and that you shall rely thereon for all purposes.</li>
                    </ul>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>5.4</strong> By reason of clause 5.2(a) you shall not integrate the Candidate into your workforce or treat the Candidate as an employee or do any act or thing towards the Candidate which may be regarded as the act of an employer towards an employee, for any purpose, but not so that this shall prejudice your obligations in relation to health and safety, the AWR or other specific obligations under these Terms.</p>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>5.5</strong> By reason of clause 5.2(b) unless the nature of the work specifically requires that you supervise, direct or control the manner in which the Candidate provides services, you shall not and have no right to do so.</p>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>5.6</strong> In relation to health and safety</p>
                    <ul className="list-disc pl-6 mt-2 space-y-2">
                      <li>(a) in respect of Candidates that are not PSCs or operating through PSCs you shall be responsible for the health and safety of the Candidate as if directly engaged by you, and, without limiting that responsibility in any way, you shall
                        <ul className="list-disc pl-6 mt-1 space-y-1">
                          <li>(i) ensure that the work complies with all relevant health and safety procedures and requirements</li>
                          <li>(ii) before deploying the Candidate and at appropriate times during the Assignment undertake such risk assessments as are necessary to ascertain risks and not allow the Candidate to undertake any work that is hazardous without informing the Candidate and us in writing of any specific or potential hazards</li>
                          <li>(iii) where there is a need for PPE, ensure that the Candidate is provided with suitable PPE, at no cost to us or the Candidate, that such PPE is maintained in good order and appropriately stored, and that the Candidate receives appropriate instruction and training on the use of the PPE</li>
                        </ul>
                      </li>
                      <li>(b) in respect of Candidates that are PSCs or operating through PSCs you shall be responsible for ensuring that any premises, equipment or materials made available for use by the Candidate complies with all relevant health and safety requirements, for carrying out appropriate risk assessments and that you make the Candidate aware of any relevant risks identified and/or procedures required to be followed.</li>
                    </ul>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>5.7</strong> To facilitate compliance with the AWR you agree the following:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>(a) prior to the commencement of a Temp Supply or as soon as is reasonably practicable thereafter you agree to provide us with the AWR information set out in the Schedule so we can check whether a Candidate has previously worked for you and those current terms and conditions that apply as Comparator Terms</li>
                      <li>(b) if requested to do so by us answer any additional questions relevant to AWR rights that we may raise</li>
                      <li>(c) you are responsible for informing us if the Comparator Terms change at any time</li>
                      <li>(d) you acknowledge that we shall be entitled to increase our charge to reflect any increased entitlement of a Candidate resulting from change in the Comparator Terms</li>
                      <li>(e) liability under the AWR may attach to either Party in the event that R.5 Rights are not correctly provided; accordingly you recognise that we may rely upon the AWR information you provide and we cannot accept liability in the event of a claim by a Candidate resulting from any inaccuracy in the information provided</li>
                      <li>(f) to comply with your obligations under the AWR, including in respect of Day 1 Rights, and R.17 of the AWR</li>
                      <li>(g) not to discriminate against a Candidate who is pregnant, has recently given birth or is breast feeding, and in particular take all reasonably practicable steps to make any reasonable adjustments or modifications to remove or reduce the health and safety risk to acceptable levels.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Section 6 */}
              <div className="bg-white p-6 rounded-lg border border-gray-200 mb-8">
                <h3 className="text-xl font-semibold text-primary-900 mb-4">Section 6 – Fees and Records for Temp Supply</h3>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>6.0</strong> For the period of supply our Fee will be calculated in accordance with Fees 3 of the Fee Scales, time spent being in accordance with records of time worked and/or services provided by the Candidate and material costs, if any. Whether or not a rate is agreed, we shall be entitled to increase our Fee to account for additional costs of supply incurred as a result of</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>(a) compliance with applicable legislation (whether specific to a particular Candidate, or applicable to our business or part of it) including relating, but not limited to, the National Minimum Wage, the AWR, working time, National Insurance contributions, the Apprenticeship Levy (under Part 6 of the Finance Act 2016), tax requirements relating to the supply of Candidates including those under the OPR, auto enrolment and statutory pension contributions</li>
                      <li>(b) imposition of, or changes to existing, sectoral guidance or conditions with which suppliers to that sector are generally expected to comply.</li>
                    </ul>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>6.1</strong> Nothing in clause 6.0 shall disentitle you from terminating a Temp Supply in the event of an increase of our Fee, but not so that you may avoid payment of an increase for which you are already liable.</p>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>6.2</strong> You agree at the end of the Validation Period to verify and confirm a correct record of hours worked by the Candidate, or, in the case of project work services chargeable upon deliverables, verify the objectives achieved. Unless we specify otherwise you should use the Candidate's time record or your own, providing the verification to us. We may specify use of a system or suitable forms and/or methodology for verification ('System'), and in that event you agree to use the System for this purpose. You agree that your verification in accordance with this provision is conclusive evidence of the acceptance of time spent and/or works undertaken by the Candidate for the relevant period.</p>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>6.3</strong> You agree to keep the records referred to under clause 6.2 until all matters under the Temp Supply are concluded, not being less than 12 months after the end of the Temp Supply.</p>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>6.4</strong> Without prejudice to clause 6.2, in the event of any query or dispute relating to the hours worked or services delivered which we believe are chargeable, both Parties shall co-operate in good faith with a view to resolving the issue promptly, and each Party shall promptly provide to the other the evidence to support its position.</p>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>6.5</strong> Where you comply with clause 6.4 and you have first paid to us the amount due for the relevant undisputed time or other element, we agree that you may withhold a disputed amount for a period of 21 days or such longer period as we may agree, to enable the dispute to be resolved without prejudice to our entitlement to interest for late payment or our entitlement to issue an invoice and/or commence proceedings for recovery of our Fee.</p>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>6.6</strong> For the avoidance of doubt</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>(a) your failure to verify or sign a record in accordance with clause 6.2 shall amount to a breach of contract and you shall not be entitled to refuse payment to us on the sole basis of such failure or alleged dissatisfaction with the quality of work</li>
                      <li>(b) notwithstanding any dispute, we are entitled to raise an invoice for our Fee, and in the event of failure to make payment we are entitled to and shall rely on the provisions of these Terms, including clause 4.0 and Section 9.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Section 7 */}
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
                <h3 className="text-xl font-semibold text-primary-900 mb-4">Section 7 – Capacity and Fees</h3>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>7.0</strong> Where a Requirement is for an Introduction of a Candidate who may be supplied by us on a Temp Supply</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>(a) because you acknowledge that you may at any time employ the Candidate, the Requirement shall be and shall be treated by both Parties as, a requirement for a Perm Placement in respect of which our capacity is as an Introducer until such time as you agree all the terms of the Temp Supply in relation to the Candidate at which time our capacity shall be as Supplier until the end of the Temp Supply</li>
                      <li>(b) the fact of termination of a Temp Supply shall constitute a Requirement by you for a further Introduction of the Candidate concerned in our capacity as an Introducer (although there is no obligation upon you to employ or engage the Candidate) and for the avoidance of doubt our capacity as a Supplier shall cease on such termination</li>
                      <li>(c) in relation to applicable terms for Fees
                        <ul className="list-disc pl-6 mt-1 space-y-1">
                          <li>(i) Section 6 applies to Fees for the Temp Supply</li>
                          <li>(ii) this Section 7 and Section 8 apply to other Fees and arrangements in place of other Fees related terms with the exception of the Payment Terms.</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>7.1</strong> If there is an Engagement before, during or after a Temp Supply (notwithstanding clauses 8.0 and 8.1) we are entitled to charge whichever is the greater of</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>(a) a Fee as an Introducer under the provisions in Section 4, or</li>
                      <li>(b) any Transfer Fee which may be due under Section 8 (in our capacity as a Supplier).</li>
                    </ul>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>7.2</strong> For the avoidance of doubt inclusion of this Section 7 within Sections relating to Temp Supply as laid out herein is, for convenience only and does not imply that our capacity is otherwise than as described in this Section 7.</p>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>7.3</strong> Where it is specifically agreed that our only service to you is for Temp Supply, Sections 7.0 to 7.2 do not apply.</p>
                  </div>
                </div>
              </div>

              {/* Section 8 */}
              <div className="bg-white p-6 rounded-lg border border-gray-200 mb-8">
                <h3 className="text-xl font-semibold text-primary-900 mb-4">Section 8 – Fees on Transfer and Additional Arrangements</h3>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>8.0</strong> This Section 8 applies only where we have Introduced a Candidate to you for the purposes of supply. Clauses 8.4 to 8.8 do not apply where there is an Opt Out Notice in respect of the Candidate.</p>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>8.1</strong> Where a Candidate we have Introduced to you is Engaged, and the Engagement is not a Temp Supply, you shall pay us a Transfer Fee.</p>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>8.2</strong> The Transfer Fee shall be calculated</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>(a) under Fees 4 where the Engagement is during or after a Temp Supply and within the Transfer Period as defined in clause 8.3</li>
                      <li>(b) under Fees 1 where there has been no Temp Supply and the Engagement is within the Fee Period.</li>
                    </ul>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>8.3</strong> The Transfer Period is either</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>(a) where there is an Opt Out Notice in respect of the Candidate, the Fee Period, or</li>
                      <li>(b) where there is no Opt Out Notice, that period within the later of 14 weeks from the first day of supply by us of the Candidate to you (disregarding any supply that ended more than 42 days prior to any new supply), or 8 weeks after the last day of supply.</li>
                    </ul>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>8.4</strong> Without prejudice to the provisions of Section 7, no Transfer Fee shall be due if all of the following conditions are complied with:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>(a) you give us written notice that you elect to take the Candidate under a Temp Supply for 12 months or such other period as we may agree ('Supply Period')</li>
                      <li>(b) except for a Temp Supply, you have not already Engaged the Candidate at the time the notice in clause 8.4(a) is given to us</li>
                      <li>(c) you agree the notice is your unconditional agreement to Engage the Candidate as elected on the terms set out in clause 8.5 ('Optional Supply')</li>
                      <li>(d) the Optional Supply continues for the Supply Period without any breaks save for statutory breaks or other breaks similar to those allowed under any immediately preceding Temp Supply of the Candidate except where we are at fault in failing to supply the Candidate</li>
                      <li>(e) you comply with the terms of the Optional Supply in all respects and there is no material breach of these Terms by you.</li>
                    </ul>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>8.5</strong> Subject to clause 8.6, the terms of the Optional Supply are</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>(a) the same terms as those that applied to the last preceding Temp Supply of the Candidate where applicable, or</li>
                      <li>(b) where there has been no preceding Temp Supply of the Candidate, and at your request we are only acting as Supplier not as Introducer at the time of the notice under clause 8.4(a), all the terms herein that apply to a Temp Supply, the Fee being under Fees 3 and the Charge being 25% of Total Cost.</li>
                    </ul>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>8.6</strong> The terms of the Optional Supply may be amended by written agreement and in any event we shall be entitled to increase our Fee where we are required, either by the Candidate or by statutory requirements, to increase our payment to or relating to the Candidate. The increase in Total Cost to reflect such sum as is required, but we shall not be entitled to increase the amount of the Charge element of the Total Cost.</p>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>8.7</strong> Where an Optional Supply follows a Temp Supply</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>(a) your agreement to any alternative terms or increase in Fee is your unequivocal acceptance that the different terms do not represent terms that are less favourable to you than under the last preceding Temp Supply of the Candidate</li>
                      <li>(b) if, despite your agreement in clause 8.7(a), you later maintain that the terms are less favourable to you, the period of supply, which would otherwise have been regarded as an Optional Supply, shall be regarded as a period of new supply and shall be a new Temp Supply to which all the provisions in these Terms, including this Section 8, apply.</li>
                    </ul>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>8.8</strong> For the avoidance of doubt</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>(a) we shall not be at fault in failing to supply the Candidate under an Optional Supply if the Candidate does not provide services because the Candidate is not ready, willing or able to do so, or if the services are not provided or the Optional Supply is terminated due to a material breach of these Terms by you</li>
                      <li>(b) if an Optional Supply is ended prematurely for any reason other than our own fault you shall not be entitled to any discount against the Transfer Fee should you then Engage the Candidate other than under an Assignment for which we are due a Fee, and we may at our discretion either issue an invoice for the Transfer Fee or for the balance of Fees due to us as if the Optional Supply had continued for the agreed term</li>
                      <li>(c) no Fee for an Introduction or Transfer Fee is due where there has been an Optional Supply which fully complies with the conditions of this Section 8.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Section 9 */}
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
                <h3 className="text-xl font-semibold text-primary-900 mb-4">Section 9 – Suspension and Termination of Temp Supply</h3>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>9.0</strong> You may terminate an Assignment by giving notice to us</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>(a) of the notice period where a notice period is agreed for termination, or immediately if there is no notice period</li>
                      <li>(b) if we have agreed to Introduce a suitable alternative Candidate within an agreed period but fail to do so.</li>
                    </ul>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>9.1</strong> Where a notice period is required and notice is given under clause 9.0(a), the Fee for the period of such notice shall be paid by you whether or not you utilise the services of the Candidate for that period.</p>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>9.2</strong> We may terminate an Assignment upon giving you notice where a notice period is agreed for termination, or immediately if there is no notice period.</p>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>9.3</strong> We may at our sole discretion suspend or terminate a Temp Supply immediately without liability and without prejudice to any right for relief if</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>(a) you are in breach of any provision in these Terms, or, being an Optional Supply, you are in material breach of a provision in these Terms</li>
                      <li>(b) we form the opinion for any reason, which need not be reasonable, that
                        <ul className="list-disc pl-6 mt-1 space-y-1">
                          <li>(i) you may not meet your obligations to us or the Candidate, or</li>
                          <li>(ii) the Candidate may no longer be willing, able or suitable to undertake work for you, or</li>
                          <li>(iii) the continuation of the Temp Supply may be detrimental to you, us, or the Candidate, including, but not limited to, detriment from reputational damage</li>
                        </ul>
                      </li>
                      <li>(c) the cost of a Temp Supply changes as a result of legislation</li>
                      <li>(d) where Section 10 applies and you issue an SDS that changes the determination of status made under an earlier SDS or which affects the tax treatment of the Candidate, for example where you have previously provided us with an OPR Exempt statement</li>
                      <li>(e) you are subject to a Cessation Event and in this event you acknowledge and agree that the continuation of the Temp Supply will result in undue hardship to us.</li>
                    </ul>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>9.4</strong> In the case of termination under clause 9.3 you agree we are not at fault and you accept that we have taken a prudent commercial step to avoid loss or potential loss.</p>
                  </div>
                </div>
              </div>

              {/* Section 10 */}
              <div className="bg-white p-6 rounded-lg border border-gray-200 mb-8">
                <h3 className="text-xl font-semibold text-primary-900 mb-4">Section 10 – Provisions for Special Category Candidates</h3>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>10.0</strong> This Section 10 applies to Candidates we supply to you who may operate through an intermediary, including a PSC, and/or are in business on their own account, and/or operate under the HM Revenue and Customs Construction Industry Scheme.</p>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>10.1</strong> Where it has been agreed that a Candidate we supply will or may be a PSC the following shall apply:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>(a) save where you have provided us with an OPR Exempt statement, you shall promptly and in any event prior to the Assignment provide us with an SDS</li>
                      <li>(b) whether before, during or after an Assignment, you shall promptly and as soon as you become aware of the same notify us should you have reason to believe that the conclusion in an SDS may no longer be correct, and, where an Assignment is continuing, providing us with a new SDS</li>
                      <li>(c) where you have provided us with an OPR Exempt statement you must inform us immediately if the statement is no longer correct, or if an earlier OPR Exempt statement was not correct</li>
                      <li>(d) you agree that we shall be entitled to rely upon an OPR Exempt statement until such time as you inform us otherwise.</li>
                    </ul>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>10.2</strong> You agree that we shall be entitled to rely upon the determination contained in an SDS or a continuing OPR Exempt statement and acknowledge that we may treat payment to the PSC in accordance with that determination or statement as the case may be; accordingly</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>(a) should the SDS or an OPR Exempt statement be subject to a challenge or deemed inaccurate or incorrect by a Tax Authority (whether or not the conclusion of the Tax Authority is correct) you shall indemnify us and keep us so indemnified against any claims or demands including costs of dealing with the same made by any government or regulatory body</li>
                      <li>(b) should you notify us in accordance with clauses 10.1(b), 10.1(c), or 10.3, or we otherwise have reason to believe that an SDS or OPR Exempt statement may be challenged or incorrect, we shall be entitled to adjust our Fee and our invoices to account for any additional costs of supply we incur or should have incurred as a result and/or we may without liability terminate the Temp Supply.</li>
                    </ul>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>10.3</strong> You agree to inform us immediately if the arrangement under which the PSC is supplied to you is subject to enquiry (whether informal or otherwise) or investigation by a Tax Authority.</p>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>10.4</strong> In case of a PSC or a candidate operating under CIS</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>(a) unless and until in writing you have first informed us otherwise, you agree that neither you nor an End User shall supervise, direct, or control the Candidate and that we shall be entitled to rely upon this provision as conclusive</li>
                      <li>(b) the Candidate or company, as the case may be, shall be entitled to provide an alternative person to perform the services under the Assignment, provided that you have given your prior written agreement to do so, which you agree not to unreasonably withhold in the case of a suitably qualified individual who meets your criteria</li>
                      <li>(c) without affecting the arrangements for supply and payment through us, your status in relation to that individual is as a client or customer of that profession or business undertaking so carried on, and the individual is not an Agency Worker by virtue of R.3(2)(b) of the AWR; accordingly, in these circumstances we agree to inform you of the profession or business undertaking so carried on, and where we do so, subject to clause 10.4(d), clause 5.7 shall not apply</li>
                      <li>(d) where we inform you that the individual is carrying on a profession or business undertaking, it will be our reasonable belief from information provided to us by the Candidate that this is the case; accordingly, should you become aware of any circumstances leading to the conclusion that the Candidate is not in fact carrying on a profession or business undertaking, clause 5.7 shall apply and you must inform us immediately and provide us with the information as required therein.</li>
                    </ul>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>10.5</strong> Nothing in this Section 10 shall prevent you or an End User from providing reasonable instructions in relation to the scope and requirements for the work to be done, or for verifying that time has been worked or milestones achieved or requiring adherence to policies applicable to external contractors including but not limited to health, safety or security.</p>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>10.6</strong> Where we have informed you that the Candidate under an Assignment is a company, provided that the role does not involve working with vulnerable persons as defined by the Conduct Regulations, we will normally have received an Opt Out Notice; accordingly, you acknowledge that in all cases we have received an Opt Out Notice unless we inform you otherwise.</p>
                  </div>
                </div>
              </div>

              {/* Section 11 */}
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
                <h3 className="text-xl font-semibold text-primary-900 mb-4">Section 11 - Confidentiality and Non-Solicitation</h3>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>11.0</strong> You shall keep any information comprising an Introduction confidential and not use it for any purpose other than that disclosed by you to us at the time the information was requested. In particular you shall not directly or indirectly induce nor seek to induce a Candidate that is engaged by contract to us to terminate such contract for any reason and it is agreed that should you be in breach of this provision you shall be liable to us for liquidated damages for each breach in the sum of £12,000 being estimated damages that you agree are reasonable for our loss.</p>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>11.1</strong> Subject to clause 11.2, no Party shall divulge to any other person, or use for its own benefit, any information capable of being confidential relating to the affairs or business or business methods of the other, or confidential information, received from the other, except that which is in the public domain or is trivial or obvious or authorised to be released or required by Court Order to be disclosed.</p>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>11.2</strong> You acknowledge that the information you have provided to us may be disclosed to third parties involved in the provision of the Services to you with whom we may deal, including, but not limited to, Candidates.</p>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>11.3</strong> No Party ('the First Party') shall, for the duration of these Terms or for a period of 12 months following the termination of an Assignment, directly or indirectly solicit or entice into their employment any person employed by the other party ('the Second Party') with whom the First Party has had any dealings arising from these Terms, without the Second Party's prior written consent.</p>
                  </div>
                </div>
              </div>

              {/* Section 12 */}
              <div className="bg-white p-6 rounded-lg border border-gray-200 mb-8">
                <h3 className="text-xl font-semibold text-primary-900 mb-4">Section 12 - Data Protection</h3>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>12.0</strong> Save where expressly agreed otherwise in writing, the capacity of each Party under this agreement shall be that of Data Controller, and each Party shall be responsible for its own compliance with the Data Laws.</p>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>12.1</strong> The Services we provide may involve the provision by us of Personal Data including information relating to Candidates, our staff or third parties with whom we have dealings in respect of our Services. Personal Data may include CV's, information relating to suitability, qualifications and experience, work records and absence information, and may in some cases include sensitive Personal Data where we consider it necessary. Information and Personal Data so provided is for the purposes of evaluating Candidate suitability, administering placements and compliance with our obligations.</p>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>12.2</strong> You will hold any Personal Data we provide securely and confidentially and shall not use it or any part of it for any unlawful purpose, nor any purpose unrelated to the provision by us of our Services, and specifically, you shall not</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>(a) provide the Personal Data to any person other than the person to whom we have submitted the Personal Data in the first place</li>
                      <li>(b) include the Personal Data in any data or subsets of Personal Data nor use it for any marketing, advertising or other promotional purpose.</li>
                    </ul>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>12.3</strong> The information you have provided to us, including Personal Data, may be disclosed to third parties involved in our Introduction of Candidates to you with whom we may deal, and to Candidates and others with whom we deal, in order to comply with regulatory obligations and to meet our practical and legitimate interest in providing a professional service.</p>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>12.4</strong> You shall co-operate with us in the event of any request by a Data Subject to enforce any rights under the Data Laws, any complaint, or investigation by the Information Commissioner's Office or any other regulatory body or supervisory authority.</p>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>12.5</strong> You warrant that</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>(a) you will at all times comply with applicable Data Laws in respect of any Personal Data provided by us to you</li>
                      <li>(b) you have appropriate technical and organisational measures within your organisation, including but not limited to measures which protect against the accidental or unlawful destruction, loss, alteration, unauthorised disclosure of, or access to Personal Data</li>
                      <li>(c) any Personal Data you provide to us will be lawfully obtained, compliant with the Data Laws</li>
                      <li>(d) you have drawn the attention of any staff deployed by you to interface with us to our Privacy Notice.</li>
                    </ul>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>12.6</strong> The restrictions within clause 12.2 shall cease to apply to Personal Data processed in relation to a relevant Candidate following your employment of that Candidate.</p>
                  </div>
                </div>
              </div>

              {/* Section 13 */}
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
                <h3 className="text-xl font-semibold text-primary-900 mb-4">Section 13 – Liability</h3>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>13.0</strong> You shall at all times comply with all applicable laws and regulations relevant to your relationship with us or a Candidate, including but not limited to the AWR, the Equality Act 2010 and the Data Laws and you agree that you shall not take any action which would cause us to be in breach of our obligations under any applicable legislation.</p>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>13.1</strong> By reason of your obligations and responsibilities in these Terms</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>(a) we shall not be liable for any loss or damage arising out of a representation, including a mistake or misrepresentation, made by us in good faith that may have induced you to accept a Candidate and/or an Assignment, or for a breach of contract, negligence or tort of the Candidate</li>
                      <li>(b) neither we nor our staff shall be liable to you for any loss, damage, delay, or compensation of any kind whether in contract or tort, or for breach of the Conduct Regulations, the AWR or the Data Laws by any person other than us, which may arise out of these Terms or an Assignment, save to the extent that exclusion of liability is prohibited by law.</li>
                    </ul>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>13.2</strong> Without prejudice to clauses 13.1 and 13.2, other than where liability cannot be limited by law, our liability shall in any event be in respect of direct losses only, and limited to the amounts as specified in the CSA, or if no such amount is specified, liability shall not exceed £1million and be limited in the case of</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>(a) a Perm Placement to the lower of repayment of our Fee, or £10,000</li>
                      <li>(b) a Temp Placement to our Fee under Fees 2 for one month</li>
                      <li>(c) a Temp Supply to a sum equivalent to the Charge under Fees 3 payable for one month under the relevant Assignment.</li>
                    </ul>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>13.3</strong> You shall indemnify us and keep us fully indemnified against any claims or demands from any person including costs of dealing with the same</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>(a) arising from incorrect or incomplete information provided by you to us, including a failure to provide us with any information as requested by us, or required by statute</li>
                      <li>(b) arising out of any breach of a provision in these Terms</li>
                      <li>(c) brought or made by you in relation to any matter under clause 13.1.</li>
                    </ul>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>13.4</strong> You agree to pay our costs reasonably incurred related to recovery of any Fee which is properly due from you but unpaid.</p>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>13.5</strong> You agree that the liability terms and limits set out herein are reasonable.</p>
                  </div>
                </div>
              </div>

              {/* Section 14 */}
              <div className="bg-white p-6 rounded-lg border border-gray-200 mb-8">
                <h3 className="text-xl font-semibold text-primary-900 mb-4">Section 14 - Other Terms</h3>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>14.0</strong> Unless you have notified us otherwise prior to the commencement of an Assignment, you warrant that there are no circumstances relevant to the work, or any aspect of an Assignment, which may result in the Candidate suffering a detriment of any kind.</p>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>14.1</strong> Where a Candidate who is not an employee of yours is required to live away from home in order to work for you, you agree to arrange suitable accommodation for the Candidate and pay the travel costs to and from that accommodation, unless we agree otherwise.</p>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>14.2</strong> We are authorised by you to advertise in any medium we deem appropriate to source Candidates where you have issued a Requirement to us.</p>
                  </div>
                </div>
              </div>

              {/* Section 15 */}
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
                <h3 className="text-xl font-semibold text-primary-900 mb-4">Section 15 - General Terms</h3>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>15.0</strong> Whilst at all times we shall act in good faith, we give no guarantee or warranty that we will be able to locate a suitable Candidate, or that a Candidate we Introduce is suitable for your purposes at any time, and we have no obligation to provide you with any information or service other than to the extent stated in these Terms or required by law</p>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>15.1</strong> In the event of a query or dispute relating to the progress of the Services or any matter under these Terms the Parties shall co-operate in good faith, each shall provide to the other the evidence to support its position, with a view to resolving the issue promptly.</p>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>15.2</strong> Pursuant to the Contracts (Rights of Third Parties) Act 1999 the Candidate has the benefit of clauses 5.1(a) to (d), 5.6, 5.7(f), 14.3 and 14.4, and it is the intention that you should be able to directly enforce against the Candidate the obligations of the Candidate towards you that are contained in the agreement between us and the Candidate. Other than for third party rights specifically conferred in or under these Terms, the Contracts (Rights of Third Parties) Act 1999 is excluded.</p>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>15.3</strong> Nothing herein creates a relationship of legal agency to the extent that one Party is able to enter into an arrangement with any other person on behalf of the other Party.</p>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>15.4</strong> You may not assign your rights, transfer, or subcontract this agreement or any rights, or obligations under or pursuant to these Terms without our prior written consent. We may assign these Terms upon giving notice to you, and we may assign or subcontract elements of these Terms, including debt, payment, or invoicing arrangements without any requirement for formal notice to you save where we are required by law to give notice.</p>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>15.5</strong> You agree these Terms including this provision and the limitations on liability herein are reasonable, and you acknowledge that you have not relied on any representations made by us that are not set out in these Terms.</p>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>15.6</strong> Any notice under these Terms shall be in writing and sent to the addressee at the last known address by first class post or by email in your case to the address last provided to us for communication and in our case to the email address used by us to communicate with you. Notice shall be deemed to have been received, in the case of post on the postal delivery date following the date of posting, and in the case of email on the date email confirmation of delivery or receipt (whichever is the earlier) is received by the sender.</p>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>15.7</strong> For the purposes of interpretation</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>(a) the definitions and meanings apply throughout, headings are for ease of interpretation only</li>
                      <li>(b) words importing one gender include all other genders and words importing the singular include the plural and vice versa</li>
                      <li>(c) each portion of these Terms defined by punctuation, paragraphs, sections, or numbering, is separate, distinct and severable and to give meaning to the intention the Court may modify any portion that may otherwise be void; subject thereto, any void portion may be severed and the remaining provisions, including those modified hereunder, shall continue in full force and effect</li>
                      <li>(d) reference to a statute regulation or statutory provision shall include reference to any amendments thereto and to any subordinate legislation or modification thereto.</li>
                    </ul>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>15.8</strong> No failure or delay by a Party to exercise a right or remedy provided under these Terms or by law shall constitute a waiver, nor shall it prevent or restrict the further exercise of that or any other right or remedy. No single or partial exercise of such right or remedy shall prevent or restrict the further exercise of that or any other right or remedy.</p>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>15.9</strong> No notice of termination by either party of this agreement shall have any effect other than to end the provision of our services from the date of the termination and specifically shall have no effect on our entitlement to a Fee or remedy due to us or which may become due to us under these Terms.</p>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>15.10</strong> Save as provided for, these Terms shall prevail in the event of a conflict between them and an Assignment. Where a provision in the CSA - Part 1 conflicts with the CSA - Part 2, the terms in the CSA - Part 2 shall prevail. An Assignment is not a variation to these Terms, and details which we agree should apply to an Assignment apply only to the extent specified for that Assignment, not further or otherwise.</p>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>15.11</strong> These Terms relate to our general relationship and each Assignment and, subject only to the terms of an Assignment or a variation provided for, these Terms comprise the sole and entire agreement between the Parties relating to the business described, supersede any previous agreement between you and us and, subject only as provided for, override any terms proposed by you.</p>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>15.12</strong> These Terms may not be varied except</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>(a) by us in providing you with notice of an updated version of these Terms which will be deemed to apply unless you notify us in writing that you do not accept the updated version within 7 days of receipt of the notice</li>
                      <li>(b) by agreement (whether orally or otherwise) and confirmed in writing by an authorised officer of ours; no other action by us shall be capable of implying our agreement.</li>
                    </ul>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-gray-700"><strong>15.13</strong> The laws of England and Wales govern these Terms and the English Courts shall have sole jurisdiction.</p>
                  </div>
                </div>
              </div>

              {/* Schedule */}
              <div className="bg-white p-6 rounded-lg border border-gray-200 mb-8">
                <h3 className="text-xl font-semibold text-primary-900 mb-4">SCHEDULE - INFORMATION REQUIRED</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-primary-900 mb-3">Information needed for a Requirement – clause 2.1</h4>
                    <p className="text-gray-700 mb-3">Sufficient information to enable us to seek a Candidate including</p>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                      <li>the position to be filled and date for commencement</li>
                      <li>nature of the work and/or position required</li>
                      <li>working conditions and location</li>
                      <li>proposed salary, budget and/or other payment terms</li>
                      <li>issues relating to health and safety relevant to any Candidate</li>
                      <li>minimum experience, certifications and qualifications required for a Candidate to be acceptable for the position</li>
                      <li>confirmation that you have all necessary licences and consents required for the proposed work</li>
                      <li>any other information which may be relevant to the decision of a candidate to accept the position</li>
                      <li>restrictions on type of candidate, if you have policy relating to the engagement of company candidates</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-primary-900 mb-3">AWR information – clause 5.7</h4>
                    <div className="space-y-3">
                      <div>
                        <p className="font-medium text-gray-900">Previous work</p>
                        <p className="text-gray-700">If the Candidate we supply or propose to supply has previously worked for you, details of any previous work engagement/s where the Candidate's previous engagement ended (a) due to maternity and/or (b) within the previous 6 months, the details in either case including the dates of the engagement, the capacity in which the Candidate was engaged, and the reason for the engagement ending.</p>
                      </div>
                      
                      <div>
                        <p className="font-medium text-gray-900">Comparator Terms</p>
                        <p className="text-gray-700">information to enable us to determine the pay and basic working and employment conditions as set out in R.6 of the AWR that are ordinarily in force within your business and which would have been applicable had the Candidate been engaged directly by you on the first day of their assignment to do the same job.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-primary-50 p-6 rounded-lg border border-primary-200 text-center">
                <h3 className="text-lg font-semibold text-primary-900 mb-2">Questions about these Terms?</h3>
                <p className="text-gray-700 mb-4">
                  If you have any questions about these terms and conditions, please contact us.
                </p>
                <div className="text-sm text-gray-600">
                  <p>RedFluer Recruitment Limited</p>
                  <p>45 Broad Lane, London, N15 4DJ</p>
                  <p>Company Registration: 16448519</p>
                  <p>Email: info@redfluer.com | Phone: 0800 123 4567</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Legal;