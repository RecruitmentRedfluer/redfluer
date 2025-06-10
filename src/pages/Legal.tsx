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
                        what we need from time to time.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Fee Scales */}
                <div>
                  <h3 className="text-xl font-semibold text-primary-900 mb-4">Fee Scales</h3>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-primary-900 mb-2">1 - Permanent Placements</h4>
                        <p className="text-gray-700 text-sm">Our fee, being a percentage of total remuneration: <strong>30%</strong></p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary-900 mb-2">2 - Temporary Placements</h4>
                        <p className="text-gray-700 text-sm"><strong>30%</strong> of the sum that you pay to the Candidate for the period of hire</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary-900 mb-2">3 - Temporary Supply</h4>
                        <p className="text-gray-700 text-sm">Fee calculated on time spent at agreed rates plus our charge</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary-900 mb-2">4 - Transfer Fee</h4>
                        <p className="text-gray-700 text-sm">The higher of <strong>25%</strong> of Remuneration or fee under section 1</p>
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
                      depending upon when employment ends:
                    </p>
                    <div className="overflow-x-auto">
                      <table className="min-w-full bg-white border border-gray-300">
                        <thead>
                          <tr className="bg-primary-50">
                            <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-primary-900">Employment Ends</th>
                            <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-primary-900">Percentage of Fee</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-2 text-gray-700">In the first 2 weeks</td>
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

                {/* Key Definitions */}
                <div>
                  <h3 className="text-xl font-semibold text-primary-900 mb-4">Key Definitions</h3>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-primary-900 mb-2">Assignment</h4>
                        <p className="text-gray-700 text-sm">An engagement in respect of which details have been negotiated and agreed through us</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary-900 mb-2">Candidate</h4>
                        <p className="text-gray-700 text-sm">Any person in respect of whom information is provided to you by us</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary-900 mb-2">Engagement</h4>
                        <p className="text-gray-700 text-sm">An arrangement under which a Candidate provides services for your benefit</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary-900 mb-2">Introduction</h4>
                        <p className="text-gray-700 text-sm">The provision of information by us that enables you to identify a Candidate</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Payment Terms */}
                <div>
                  <h3 className="text-xl font-semibold text-primary-900 mb-4">Payment Terms</h3>
                  <div className="bg-primary-50 p-6 rounded-lg border border-primary-200">
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-primary-500 font-bold mr-2">•</span>
                        <span>Fees and Expenses are payable within <strong>7 days</strong> from the date of our invoice</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary-500 font-bold mr-2">•</span>
                        <span>For Engagements not informed in advance: <strong>14 days</strong> from the Engagement</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary-500 font-bold mr-2">•</span>
                        <span>Administration charge of up to <strong>£750 + VAT</strong> for sums overdue more than one month</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary-500 font-bold mr-2">•</span>
                        <span>Interest due on overdue sums: <strong>2% per month</strong></span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Contact Information */}
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
                        <h4 className="font-semibold text-primary-900 mb-2">Governing Law</h4>
                        <p className="text-gray-700">
                          These Terms are governed by the laws of <strong>England and Wales</strong><br />
                          The English Courts shall have sole jurisdiction
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Important Notice */}
                <div className="bg-warning-50 border border-warning-200 p-6 rounded-lg">
                  <h4 className="font-semibold text-warning-800 mb-2">Important Notice</h4>
                  <p className="text-warning-700 text-sm">
                    This is a summary of key terms. The complete terms and conditions document contains additional 
                    provisions covering liability, data protection, confidentiality, and other important matters. 
                    Please contact us for the full terms and conditions document.
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