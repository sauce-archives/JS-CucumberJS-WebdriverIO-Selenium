RUN_CUCUMBER_TESTS=./node_modules/.bin/parallel-cucumber-js features -f json -w 10

# Run all _tests in parallel
run_tests:
	make -j test_win7_chrome_43 test_winXP_chrome_41 test_win7_ie_10 test_win8_1_ie_11 test_win7_firefox_37

test_win7_chrome_43:
	browserName='chrome' version=43 platform='Windows 7' name=Win7Chrome_Tests \
		$(RUN_CUCUMBER_TESTS) > Win7ChromeTests.txt
	cat Win7ChromeTests.txt | ./node_modules/.bin/cucumber-junit > Win7Chrome_Tests.xml

test_winXP_chrome_41:
	browserName='chrome' version=41 platform=XP name=XPChrome_Tests \
		$(RUN_CUCUMBER_TESTS) > XPChromeTests.txt
	cat XPChromeTests.txt | ./node_modules/.bin/cucumber-junit > XPChrome_Tests.xml

test_win7_ie_10:
	browserName='internet explorer' version=10 platform='Windows 7' name=Win7IE10_Tests \
		$(RUN_CUCUMBER_TESTS) > Win7IE10Tests.txt
	cat Win7IE10Tests.txt | ./node_modules/.bin/cucumber-junit > Win7IE10_Tests.xml

test_win8_1_ie_11:
	browserName='internet explorer' version=11 platform='Windows 8.1' name=Win81IE11_Tests \
		$(RUN_CUCUMBER_TESTS) > Win81IE11Tests.txt
	cat Win81IE11Tests.txt | ./node_modules/.bin/cucumber-junit > Win7IE11_Tests.xml

test_win7_firefox_37:
	browserName='firefox' version=37 platform='Windows 7' name=Win7Firefox37_Tests \
		$(RUN_CUCUMBER_TESTS) > Win7Firefox37Tests.txt
	cat Win7Firefox37Tests.txt | ./node_modules/.bin/cucumber-junit > Win7Firefox37_Tests.xml

test_OSX10_10_safari_8:
	browserName='safari' version=8 platform='OS X 10.10' name=OSX10_10Safari8_Tests \
		$(RUN_CUCUMBER_TESTS) > OSX10_10Safari8Tests.txt
	cat OSX10_10Safari8Tests.txt | ./node_modules/.bin/cucumber-junit > OSX10_10Safari8_Tests.xml
