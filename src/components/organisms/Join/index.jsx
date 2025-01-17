import { useRef, useState, lazy, Suspense } from 'react';
import { useErrorBoundary } from 'preact/hooks';
import styled from 'styled-components';
import config from '../../../config';
import Section from '../../molecules/Section';
import { useL10n } from '../../L10nContext';
import Input from '../../atoms/Input';
import Button, {
  variants as buttonVariants,
  paddingVariants as buttonPaddingVariants,
} from '../../atoms/Button';
import Link from '../../atoms/Link';
import Card from '../../atoms/Card';
import useOnClickHydrate from '../../../hooks/useOnClickHydrate';
import FacebookIcon from '../../icons/FacebookIcon';
import TelegramIcon from '../../icons/TelegramIcon';
import LoadingIcon from '../../icons/LoadingIcon';
import EmailIcon from '../../icons/EmailIcon';
import appleWatchAvifPath from './apple-watch.avif';
import appleWatchWebpPath from './apple-watch.webp';
import appleWatchPngPath from './apple-watch.png';
import HrDecoratedPhoto from './HrDecoratedPhoto';
import ShareButton from '../../molecules/ShareButton';
import RecommendButton from '../../molecules/RecommendButton';
import RequiredFormText from '../../atoms/RequiredFormText';

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 3em -1em -10em;

  column-gap: calc(15% - 2.3em);
`;

const Form = styled.form`
  flex: 3 0 22em;
  max-width: calc(100% - 2em);
  margin: 0 1em 10em;
`;

const StyledInput = styled(Input)`
  margin: 0 0 1em 0;
`;

const StyledButton = styled(Button)`
  margin: 1.5rem 0;
`;

const Agreement = styled.span`
  color: ${({ theme }) => theme.colors.paleText};
`;

const StyledLoadingIcon = styled(LoadingIcon)`
  margin: -0.5em -1.5em -0.5em 0.5em;

  font-size: 1.5em;
`;

const ErrorMessage = styled.p`
  color: red;
`;

const RightCol = styled.div`
  display: flex;
  flex: 1 0 16em;
  flex-direction: column;
  max-width: calc(100% - 2em);
  margin: 0 1em 10em;
`;

const HrCard = styled(Card)`
  position: relative;

  margin-bottom: 1em;
  padding-top: 4.5em;
`;

const HrPicture = styled(HrDecoratedPhoto)`
  position: absolute;
  top: -4.5em;
  left: 50%;

  transform: translateX(-50%);
`;

const HrCardText = styled.p``;

const ContactLinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0.5em 0;
`;

const ContactLink = styled(Link)`
  display: flex;
  align-items: center;
  margin: 0.5em 0;
`;

const StyledIcon = styled(({ icon: Icon, ...props }) => <Icon {...props} />)`
  margin-right: 0.5em;

  font-size: 1.5em;
`;

const RecommendationCard = styled(Card)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1em;
`;

const RecommendationCardDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 1em;
`;

const RecommendationDescription = styled.p``;

const AppleWatchImg = styled.img`
  background: none;
`;

const formStatuses = {
  IDLE: 'IDLE',
  SUBMITTING: 'SUBMITTING',
  SUCCESS: 'SUCCESS',
  FAIL: 'FAIL',
};

const SuccessModal = lazy(() => import('./SuccessModal'));

const Join = () => {
  const { t } = useL10n();
  const { shouldBeHydrated, handleClick } = useOnClickHydrate();
  const formRef = useRef();
  const [formStatus, setFormStatus] = useState(formStatuses.IDLE);
  useErrorBoundary(() => setFormStatus(formStatuses.FAIL));

  const handleSubmit = async (event) => {
    if (
      typeof window.FormData === 'undefined' ||
      typeof window.fetch === 'undefined' ||
      typeof window.URLSearchParams === 'undefined'
    ) {
      return;
    }

    event.preventDefault();

    setFormStatus(formStatuses.SUBMITTING);

    const formData = new FormData(formRef.current);

    try {
      const { ok } = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      });
      setFormStatus(ok ? formStatuses.SUCCESS : formStatuses.FAIL);
    } catch (err) {
      setFormStatus(formStatuses.FAIL);
    }
  };

  const handleClose = () => {
    setFormStatus(formStatuses.IDLE);
  };

  return (
    <Section grey id={config.sectionIds.join}>
      <Section.Title>{t('join.title')}</Section.Title>
      <InnerWrapper>
        <Form
          name="join"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit}
          ref={formRef}
        >
          <input type="hidden" name="form-name" value="join" />
          <StyledInput
            type="text"
            name="name"
            label={t('join.form.name')}
            id="join-form-input-name"
            required
          />
          <StyledInput
            type="email"
            name="email"
            label={t('join.form.email')}
            id="join-form-input-email"
            required
          />
          <StyledInput
            type="text"
            name="link"
            label={t('join.form.link')}
            id="join-form-input-link"
          />
          {formStatus !== formStatuses.SUCCESS ? (
            <StyledButton
              type="submit"
              fullWidth
              variant={buttonVariants.ACCENT}
              data-id="orig"
            >
              {t('join.form.submit')}
              {formStatus === formStatuses.SUBMITTING ? (
                <StyledLoadingIcon />
              ) : null}
            </StyledButton>
          ) : (
            <Suspense
              fallback={
                <StyledButton
                  type="submit"
                  fullWidth
                  variant={buttonVariants.ACCENT}
                  data-id="fallback"
                >
                  {t('join.form.submit')}
                  <StyledLoadingIcon />
                </StyledButton>
              }
            >
              <StyledButton
                type="submit"
                fullWidth
                variant={buttonVariants.ACCENT}
                data-id="loaded"
              >
                {t('join.form.submit')}
              </StyledButton>
              <SuccessModal isOpen onClose={handleClose} />
            </Suspense>
          )}

          {formStatus === formStatuses.FAIL ? (
            <ErrorMessage>{t('join.form.error')}</ErrorMessage>
          ) : null}
          <Agreement>
            {t('join.form.agreement', {
              LinkComponent: Link,
              url: '/privacy-policy.pdf',
            })}
          </Agreement>
          <RequiredFormText />
        </Form>
        <RightCol>
          <HrCard dangerouslySetInnerHTML={{ __html: '' }}>
            <HrPicture />
            <HrCardText>{t('join.hrMessage')}</HrCardText>
            <ContactLinksWrapper>
              <ContactLink
                href="https://t.me/irina_lenchevskaia"
                noHoverEffect
                target="_blank"
                rel="noopener"
              >
                <StyledIcon icon={TelegramIcon} /> {t('join.contacts.telegram')}
              </ContactLink>
              <ContactLink
                href="https://www.facebook.com/profile.php?id=100001889437321"
                noHoverEffect
                target="_blank"
                rel="noopener"
              >
                <StyledIcon icon={FacebookIcon} /> {t('join.contacts.facebook')}
              </ContactLink>
              <ContactLink href="mailto:join@flatstack.com" noHoverEffect>
                <StyledIcon icon={EmailIcon} /> {t('join.contacts.email')}
              </ContactLink>
            </ContactLinksWrapper>
          </HrCard>
          <RecommendationCard
            dangerouslySetInnerHTML={
              shouldBeHydrated ? undefined : { __html: '' }
            }
            onClick={handleClick}
          >
            <RecommendationCardDescriptionWrapper>
              <RecommendationDescription>
                {t('join.recommendationDescription')}
              </RecommendationDescription>
              <RecommendButton
                variant={buttonVariants.ACCENT_TEXT}
                negativeMargins
                paddingVariant={buttonPaddingVariants.SYMMETRIC}
              />
            </RecommendationCardDescriptionWrapper>
            <picture>
              <source srcSet={appleWatchAvifPath} type="image/avif" />
              <source srcSet={appleWatchWebpPath} type="image/webp" />
              <AppleWatchImg
                src={appleWatchPngPath}
                alt={t('join.appleWatchImageAlt')}
                width="80"
                height="94"
                loading="lazy"
              />
            </picture>
          </RecommendationCard>
          <ShareButton variant={buttonVariants.BORDERED} />
        </RightCol>
      </InnerWrapper>
    </Section>
  );
};

export default Join;
