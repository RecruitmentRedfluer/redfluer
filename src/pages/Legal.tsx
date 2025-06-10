import React from 'react';
import Layout from '../components/layout/Layout';

const Legal: React.FC = () => {
  return (
    <Layout pageTitle="Legal Information & Terms" showCTA={false}>
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Website Materials */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-primary-900 mb-6">Website Materials</h2>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold text-primary-900 mb-4">Contract Terms and Conditions</h3>
                <p className="text-gray-700 mb-4">
                  We at <strong>Redfluer Limited</strong> (company registration number 16448519) of 45 Broad Lane, London, N15 4DJ 
                  are in the business of providing services to assist hirers and employers with the introduction of temporary, 
                  contractor or permanent staff.
                </p>
              </div>

              <div className="space-y-8">
                {/* Introduction and Acceptance */}
                <div>
                  <h3 className="text-xl font-semibold text-primary-900 mb-4">Introduction and Acceptance</h3>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-700 mb-4">
                      This Client Services Agreement ('CSA') comprises the framework terms and conditions upon which we conduct business 
                      'these Terms' and consists of CSA - Part 1, which sets out our primary terms and rates, and CSA - Part 2 which 
                      embodies our standard main terms.
                    </p>
                    <p className="text-gray-700 mb-4">
                      Once you have received this CSA, any act by you of accepting or requesting services from us or using in any way 
                      information from us relating to a Candidate, is deemed to be and shall constitute your acceptance of these Terms 
                      which then apply.
                    </p>
                    <p className="text-gray-700">
                      You may view our Privacy Notice at <a href="/" className="text-primary-500 hover:text-primary-600">www.redfluerrecruitment.co.uk</a>
                    </p>
                  </div>
                </div>

                {/* Primary Terms */}
                <div>
                  <h3 className="text-xl font-semibold text-primary-900 mb-4">Terms and Conditions for Our Services</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-primary-500 pl-4">
                      <p className="text-gray-700">
                        <strong>1.</strong> Our primary service function is to locate, introduce and/or engage with suitable candidates 
                        for you to employ generally or take on temporary basis or a fixed term to meet your requirements. Candidates may 
                        be individuals for temporary or permanent hire, temp agency workers or contractors depending on your needs. 
                        If you require any alternative services, we will be happy to discuss with you but please note these may be 
                        subject to different terms.
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-primary-500 pl-4">
                      <p className="text-gray-700">
                        <strong>2.</strong> Account manager(s) will be assigned to act as our point of contact to liaise with you. 
                        (Please direct any question concerning a Requirement or Candidate to an account manager).
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-primary-500 pl-4">
                      <p className="text-gray-700">
                        <strong>3.</strong> Except where we have agreed a specific chargeable item, for example, an advertising campaign 
                        or a different or specific service or for Expenses, we only charge fees where we Introduce Candidates that you 
                        use in some way. Please note, we are entitled to our Fee for an Introduction regardless of the role, tasks or 
                        purpose for which you use a Candidate.
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-primary-500 pl-4">
                      <p className="text-gray-700">
                        <strong>4.</strong> Although we are entitled to charge a Fee wherever there is an Engagement following our 
                        Introduction, the normal default period is 9-12 months.
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-primary-500 pl-4">
                      <p className="text-gray-700">
                        <strong>5.</strong> We rely on the information you give to us so that we can provide the best outcome for you. 
                        It is important that you give us all the information necessary for every placement and we will advise you on 
                        what we need from time to time. To avoid any misunderstanding it is also important that you keep us promptly 
                        informed of your intentions in relation to Candidates we Introduce. For example, if you are already considering 
                        a person we introduce as a Candidate for engagement at the time we provide you with details of that person you 
                        should let us know immediately and in any event within 3 working days from the time we provide details of the person.
                      </p>
                    </div>

                    <div className="border-l-4 border-primary-500 pl-4">
                      <p className="text-gray-700">
                        <strong>6.</strong> Candidates we supply on a temporary basis are engaged by us on a contract for services unless 
                        we inform you otherwise. As the Candidate's relationship is with us and you are not intended to be the Candidate\'s 
                        employer, save for providing the Candidate with required information related to the work being done, you should 
                        refer any questions and relationship matters to us, not to the Candidate.
                      </p>
                    </div>

                    <div className="border-l-4 border-primary-500 pl-4">
                      <p className="text-gray-700">
                        <strong>7.</strong> Our Fees depend on the type of service provided and are calculated using the Fee Scales overleaf. 
                        Except for Temp Supply or where otherwise agreed, the Fees are calculated as a percentage of total Remuneration.
                      </p>
                    </div>

                    <div className="border-l-4 border-primary-500 pl-4">
                      <p className="text-gray-700">
                        <strong>8.</strong> The intervals at which we normally raise invoices (Invoicing Intervals) for a margin only 
                        Temp Placement is weekly, for a Temp Supply is weekly. You must validate work done where there is a Temp Supply 
                        at the end of each week (Validation Period).
                      </p>
                    </div>

                    <div className="border-l-4 border-primary-500 pl-4">
                      <p className="text-gray-700">
                        <strong>9.</strong> You are ultimately responsible for ascertaining suitability and checking the Candidate's work 
                        and performance, and so, whilst we accept liability for our own negligence and where required by law, we do not 
                        accept liability for the work done by a Candidate in any circumstances. Our liability excludes indirect loss, is 
                        subject to a cap of £1m, unless otherwise required by law, in the case of a Temp Supply is limited to one month's 
                        Fee under the Assignment, and in the case of a Temp Placement is limited to our charge for one month.
                      </p>
                    </div>

                    <div className="border-l-4 border-primary-500 pl-4">
                      <p className="text-gray-700">
                        <strong>10.</strong> If your employment of a Candidate ends within the stated period in the Refund Scale (see below), 
                        we shall repay a proportion of the Fee ('Refund') in accordance with the Refund Scale provided all the Refund 
                        Conditions below apply. A Refund is due 14 days after all Refund Conditions have been satisfied. No Refund is due 
                        if any Refund Condition is not met.
                      </p>
                    </div>

                    <div className="border-l-4 border-primary-500 pl-4">
                      <p className="text-gray-700 mb-4">
                        <strong>11.</strong> The Refund Conditions are:
                      </p>
                      <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                        <li>(a) the arrangement in respect of which the Refund is claimed was a Perm Placement agreed with us</li>
                        <li>(b) no later than 3 working days after the date on which one party to the employment informs the other of the decision to terminate, time being of the essence, you inform us in writing</li>
                        <li className="ml-4">(i) of the fact and date of the decision and the date of actual termination</li>
                        <li className="ml-4">(ii) whether the decision was made by you or the Candidate and the reason for the decision to terminate, with a copy of any written notice of termination, and</li>
                        <li className="ml-4">(iii) that you wish to claim a Refund</li>
                        <li>(c) the employment was not ended by reason of redundancy but was ended</li>
                        <li className="ml-4">(i) by you, by reason of the fact that the Candidate was wholly unsuitable for the position taken up ('the Role') arising from matters that you became aware of since the employment commenced, not being matters that you should reasonably have become aware of prior to commencement of the employment, or</li>
                        <li className="ml-4">(ii) by the Candidate, other than because of your act or omission which amounted to a breach of your obligations to the Candidate</li>
                        <li>(d) prior to the Perm Placement you have not used the Candidate in any capacity, whether working direct for you, by supply through us, or otherwise</li>
                        <li>(e) you provided us with full and correct information relevant to the Role and the Candidate was employed in the Role as described</li>
                        <li>(f) you are not in breach of these Terms</li>
                        <li>(g) you have first paid the relevant Fees in accordance with the Payment Terms, time being of the essence.</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-primary-500 pl-4">
                      <p className="text-gray-700 mb-4">
                        <strong>12.</strong> It is an additional Refund Condition that at the same time as claiming the Refund you make a 
                        written request for us to seek a replacement Candidate for the Role, in which event the following process shall apply:
                      </p>
                      <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                        <li>(a) we may in good faith seek to Introduce a replacement Candidate within 28 days, or such longer period as you agree</li>
                        <li>(b) you cooperate in good faith with our effort</li>
                        <li>(c) unless a Candidate so Introduced is demonstrably not suitable for the Role and within 7 days of the Introduction you provide us with proper reasons for rejection, the Introduction shall be deemed to be a replacement for the Introduction of the first Candidate and your entitlement to a Refund shall cease</li>
                        <li>(d) if we notify you that we are, or consider we may be, unable to Introduce a Candidate in compliance with these arrangements, or we are unable to Introduce a replacement within the period referred to in sub paragraph (a), a Refund shall then be due</li>
                        <li>(e) nothing in this clause removes your obligation to pay us a Fee in accordance with these Terms if you Engage a proposed replacement Candidate you have informed us has been rejected.</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-primary-500 pl-4">
                      <p className="text-gray-700">
                        <strong>13.</strong> You agree to promptly repay a Refund if, within 12 months of your Refund claim, you re-Engage 
                        the relevant Candidate or if the Refund was not properly due to you.
                      </p>
                    </div>

                    <div className="border-l-4 border-primary-500 pl-4">
                      <p className="text-gray-700">
                        <strong>14.</strong> Where you employ a Candidate and have kept us informed of your decision to employ, we agree not 
                        to solicit the Candidate to take up employment elsewhere for the period of 12 months except where any of the 
                        Non-Solicit Conditions apply. Contact of a general, automated, or inadvertent nature (for example, by reason of 
                        connection with or inclusion on social media or a mailing list) shall not amount to soliciting.
                      </p>
                    </div>

                    <div className="border-l-4 border-primary-500 pl-4">
                      <p className="text-gray-700 mb-4">
                        <strong>15.</strong> The Non-Solicit Conditions are:
                      </p>
                      <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                        <li>(a) you are in breach of these Terms</li>
                        <li>(b) the employment has ended for any reason, the embargo ceasing upon the giving of notice of termination</li>
                        <li>(c) you did not provide us with full and correct information relevant to the Assignment</li>
                        <li>(d) you have agreed we may help the Candidate find other work.</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-primary-500 pl-4">
                      <p className="text-gray-700">
                        <strong>16.</strong> In the case of a Temp Supply initially agreed to continue for more than one week, if you advise 
                        us on the first day that the Candidate is unsuitable, we shall only charge you the Total Cost for the Candidate – see Fees 3.
                      </p>
                    </div>

                    <div className="border-l-4 border-primary-500 pl-4">
                      <p className="text-gray-700">
                        <strong>17.</strong> If you are not satisfied with a Candidate we supply for an ongoing Requirement you agree to give 
                        us reasonable time to find and supply a suitable alternative Candidate.
                      </p>
                    </div>

                    <div className="border-l-4 border-primary-500 pl-4">
                      <p className="text-gray-700">
                        <strong>18.</strong> Wherever there is an increase in Remuneration within 12 months of commencement of an Engagement, 
                        including due to increased hours, we shall be entitled to raise a further invoice for our Fee reflecting the increase.
                      </p>
                    </div>

                    <div className="border-l-4 border-primary-500 pl-4">
                      <p className="text-gray-700">
                        <strong>19.</strong> IR35 tax. If we advise you that a Candidate operates through a company or partnership to which 
                        the off payroll tax rules set out in Chapter 10 of Part 2 of ITEPA may apply you must provide us either with an SDS, 
                        namely a status determination statement in the form required pursuant to the OPR or an OPR Exempt Statement, namely 
                        that the OPR do not apply because you are either a small company or you have no UK connection. Your statement to us 
                        in either case may affect the rates upon which we can provide the supply.
                      </p>
                    </div>

                    <div className="border-l-4 border-primary-500 pl-4">
                      <p className="text-gray-700">
                        <strong>20.</strong> NOT IN USE
                      </p>
                    </div>

                    <div className="border-l-4 border-primary-500 pl-4">
                      <p className="text-gray-700">
                        <strong>21.</strong> Fees and Expenses are payable within 7 days from the date of our invoice save for Engagements 
                        of which we are not informed in advance for which our Fees are payable within 14 days of the Engagement. We may 
                        charge a sum not exceeding £750 + VAT for our administration charge in recovering any sum overdue for more than one month.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Fee Scales */}
                <div>
                  <h3 className="text-xl font-semibold text-primary-900 mb-4">Fee Scales</h3>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-primary-900 mb-2">1 – Fee Scale for Perm Placements and Engagements except where otherwise specified</h4>
                        <p className="text-gray-700">Our fee, being a percentage of that total remuneration is <strong>30%</strong></p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary-900 mb-2">2 – Fees for a Temp Placement (where you hire and pay the Candidate)</h4>
                        <p className="text-gray-700"><strong>30%</strong> of the sum that you pay to the Candidate for the period of hire as specified by us for each hire.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary-900 mb-2">3 – Fees for Temp Supply</h4>
                        <p className="text-gray-700">Where we supply the Candidate, our Fee is calculated on time spent at the rate specified and agreed by us for the Assignment from time to time. Our Fee is based upon the total of the cost to us of engaging and supplying the Candidate whether calculated with reference to a Candidate or all or part of our business (including statutory payments we make to or relating to the Candidate) ('Total Cost') plus our charge ('Charge') which, unless otherwise agreed in writing, shall be calculated as a percentage of Total Cost. Note: Fees may increase if costs increase.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary-900 mb-2">4 – Transfer Fee for Engagements following our supply of the Candidate</h4>
                        <p className="text-gray-700">The higher of <strong>25%</strong> of Remuneration, or a fee charged under Fees 1, chargeable if there is an Engagement within the relevant Transfer Period of a Candidate we have supplied.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Refund Scale */}
                <div>
                  <h3 className="text-xl font-semibold text-primary-900 mb-4">Refund Scale</h3>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-gray-700 mb-4">
                      The Refund shall be the amount equivalent to the percentage of Fee shown in the scale below, 
                      the percentage of Fee depending upon the date employment ends, the lowest percentage always applying:
                    </p>
                    <div className="overflow-x-auto">
                      <table className="min-w-full bg-white border border-gray-300">
                        <thead>
                          <tr className="bg-primary-50">
                            <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-primary-900">Employment ends</th>
                            <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-primary-900">Percentage of Fee</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-2 text-gray-700">in the first 2 weeks</td>
                            <td className="border border-gray-300 px-4 py-2 text-gray-700">100%</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-4 py-2 text-gray-700">3 - 6 weeks</td>
                            <td className="border border-gray-300 px-4 py-2 text-gray-700">75%</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-2 text-gray-700">7 - 10 weeks</td>
                            <td className="border border-gray-300 px-4 py-2 text-gray-700">50%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                {/* Company Information */}
                <div>
                  <h3 className="text-xl font-semibold text-primary-900 mb-4">Company Information</h3>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-primary-900 mb-2">Registered Company</h4>
                        <p className="text-gray-700">
                          <strong>Redfluer Limited</strong><br />
                          Company Registration: 16448519<br />
                          45 Broad Lane<br />
                          London, N15 4DJ<br />
                          United Kingdom
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary-900 mb-2">Contact Information</h4>
                        <p className="text-gray-700">
                          Phone: 0800 123 4567<br />
                          Email: info@redfluer.co.uk<br />
                          Website: www.redfluerrecruitment.co.uk
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Important Notice */}
                <div className="bg-warning-50 border border-warning-200 p-6 rounded-lg">
                  <h4 className="font-semibold text-warning-800 mb-2">Important Notice</h4>
                  <p className="text-warning-700 text-sm">
                    This document contains the key terms and conditions for our recruitment services. The complete terms and conditions 
                    document contains additional provisions covering liability, data protection, confidentiality, and other important matters. 
                    Please contact us if you require the full terms and conditions document or have any questions about these terms.
                  </p>
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